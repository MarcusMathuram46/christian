import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

function Home() {
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [importantAds, setImportantAds] = useState([])
  const [mostReadAds, setMostReadAds] = useState([])
  const [generalAds, setGeneralAds] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adsRes = await axios.get(
          'http://localhost:4000/api/advertisements'
        )
        setAds(Array.isArray(adsRes.data) ? adsRes.data : [])

        if (Array.isArray(adsRes.data)) {
          setImportantAds(
            adsRes.data.filter((item) => item.type === 'important')
          )
          setMostReadAds(
            adsRes.data.filter((item) => item.type === 'most-read')
          )
          setGeneralAds(adsRes.data.filter((item) => item.type === 'general'))
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

      {/* Ads Grid Layout */}
      <div className="content-grid">
        {/* Center Section - Main Ads */}
        <motion.div className="center-section">
          {ads.length > 0 ? (
            <motion.div className="main-ads-item">
              <motion.img src={ads[0]?.image} alt="Main Ads" />
              <div className="main-ads-text">
                <motion.h2>{ads[0]?.title}</motion.h2>
                <p className="author">{ads[0]?.author}</p>
                <p>{ads[0]?.content}</p>
              </div>
            </motion.div>
          ) : (
            <p>No important ads available</p>
          )}
        </motion.div>

        {/* Below Center Section - Additional ads */}
        <motion.div className="below-center-section">
          {ads.slice(1, 4).map((item, index) => (
            <motion.div key={index} className="horizontal-ads-item">
              <img src={item.image} alt="Ads Thumbnail" />
              <div className="horizontal-ads-text">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section - Most Important Ads */}
        <motion.div className="right-section">
          <h3>Most Important Ads</h3>
          <ul>
            {ads.slice(4, 8).map((item, index) => (
              <motion.li key={index}>
                <img src={item.image} alt="Most Important Ads" />
                <span>{item.title}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Extra Sections for Better Layout */}
      <div className="ads-sections">
        {/* Important Ads Section */}
        <motion.div className="ads-category">
          <h3>Important Ads</h3>
          <ul>
            {importantAds.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="Important Ads" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Most Read Ads Section */}
        <motion.div className="ads-category">
          <h3>Most Read Ads</h3>
          <ul>
            {mostReadAds.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="Most Read Ads" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* General Ads Section */}
        <motion.div className="ads-category">
          <h3>General Ads</h3>
          <ul>
            {generalAds.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="General Ads" />
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
