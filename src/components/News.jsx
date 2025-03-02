import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import '../styles/News.css'

function News() {
  const [news, setNews] = useState([])
  const [mostRead, setMostRead] = useState([])
  const [importantNews, setImportantNews] = useState([])
  const [generalNews, setGeneralNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [importantRes, mostReadRes, generalRes] = await Promise.all([
          axios.get('http://localhost:4000/api/news/important'),
          axios.get('http://localhost:4000/api/news/most-read'),
          axios.get('http://localhost:4000/api/news/general'),
        ])

        setImportantNews(
          Array.isArray(importantRes.data) ? importantRes.data : []
        )
        setMostRead(Array.isArray(mostReadRes.data) ? mostReadRes.data : [])
        setGeneralNews(Array.isArray(generalRes.data) ? generalRes.data : [])

        // Combine all news into one list (for rendering in the main section)
        setNews([...importantRes.data, ...mostReadRes.data, ...generalRes.data])
      } catch (error) {
        console.error('Error fetching news:', error)
        setError('Failed to fetch news.')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) return <p>Loading news...</p>
  if (error) return <p className="error">{error}</p>

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      className="news-container"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1 className="news-title" variants={fadeIn}>
        NEWS
      </motion.h1>
      <div className="news-content">
        {/* Important News Section */}
        {importantNews.length > 0 && (
          <motion.div className="important-news" variants={slideInFromLeft}>
            <h2>Important News</h2>
            {importantNews.map((item, index) => (
              <motion.div key={index} className="news-item" variants={fadeIn}>
                <img src={item.imageUrl} alt="News" className="news-image" />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Most Read Sidebar */}
        {mostRead.length > 0 && (
          <motion.aside className="most-read" variants={slideInFromRight}>
            <h2>Most Read</h2>
            <ol>
              {mostRead.map((item, index) => (
                <motion.li
                  key={index}
                  className="most-read-item"
                  whileHover={{ x: 10 }}
                  variants={fadeIn}
                >
                  <img
                    src={item.imageUrl}
                    alt="Most Read Thumbnail"
                    className="most-read-image"
                  />
                  <span>{item.title}</span>
                </motion.li>
              ))}
            </ol>
          </motion.aside>
        )}

        {/* General News */}
        {generalNews.length > 0 && (
          <motion.div className="general-news" variants={fadeIn}>
            <h2>General News</h2>
            {generalNews.map((item, index) => (
              <motion.div key={index} className="news-item" variants={fadeIn}>
                <img
                  src={item.imageUrl}
                  alt="General News"
                  className="news-image"
                />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default News
