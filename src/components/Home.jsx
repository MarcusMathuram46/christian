import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

function Home() {
  const [ads, setAds] = useState([])
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [importantNews, setImportantNews] = useState([])
  const [mostReadNews, setMostReadNews] = useState([])
  const [generalNews, setGeneralNews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adsRes, newsRes] = await Promise.all([
          axios.get('http://localhost:4000/api/advertisements'),
          axios.get('http://localhost:4000/api/news'),
        ])

        setAds(Array.isArray(adsRes.data) ? adsRes.data : [])

        if (Array.isArray(newsRes.data)) {
          setNews(newsRes.data)
          setImportantNews(
            newsRes.data.filter((item) => item.type === 'important')
          )
          setMostReadNews(
            newsRes.data.filter((item) => item.type === 'most-read')
          )
          setGeneralNews(newsRes.data.filter((item) => item.type === 'general'))
        }
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load content.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (ads.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % ads.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [ads.length])

  if (loading) return <p>Loading content...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <motion.div className="home-container">
      {/* Slider Section */}
      <motion.div className="slider-section">
        <AnimatePresence mode="wait">
          {ads.length > 0 && (
            <motion.div
              key={currentIndex}
              className="slider"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={ads[currentIndex]?.image}
                alt={ads[currentIndex]?.title}
              />
              <h2>{ads[currentIndex]?.title}</h2>
              <p>{ads[currentIndex]?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Manual Navigation */}
        {ads.length > 1 && (
          <>
            <button
              className="prev-btn"
              onClick={() =>
                setCurrentIndex((currentIndex - 1 + ads.length) % ads.length)
              }
            >
              ❮
            </button>
            <button
              className="next-btn"
              onClick={() => setCurrentIndex((currentIndex + 1) % ads.length)}
            >
              ❯
            </button>
          </>
        )}
      </motion.div>

      {/* News Grid Layout */}
      <div className="content-grid">
        {/* Center Section - Main News */}
        <motion.div className="center-section">
          {news.length > 0 ? (
            <motion.div className="main-news-item">
              <motion.img src={news[0]?.image} alt="Main News" />
              <div className="main-news-text">
                <motion.h2>{news[0]?.title}</motion.h2>
                <p className="author">{news[0]?.author}</p>
                <p>{news[0]?.content}</p>
              </div>
            </motion.div>
          ) : (
            <p>No important news available</p>
          )}
        </motion.div>

        {/* Below Center Section - Additional News */}
        <motion.div className="below-center-section">
          {news.slice(1, 4).map((item, index) => (
            <motion.div key={index} className="horizontal-news-item">
              <img src={item.image} alt="News Thumbnail" />
              <div className="horizontal-news-text">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - Most Important News */}
        <motion.div className="right-section">
          <h3>Most Important News</h3>
          <ul>
            {news.slice(4, 8).map((item, index) => (
              <motion.li key={index}>
                <img src={item.image} alt="Most Important News" />
                <span>{item.title}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Extra Sections for Better Layout */}
      <div className="news-sections">
        {/* Important News Section */}
        <motion.div className="news-category">
          <h3>Important News</h3>
          <ul>
            {importantNews.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="Important News" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Most Read News Section */}
        <motion.div className="news-category">
          <h3>Most Read News</h3>
          <ul>
            {mostReadNews.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="Most Read News" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* General News Section */}
        <motion.div className="news-category">
          <h3>General News</h3>
          <ul>
            {generalNews.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="General News" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
