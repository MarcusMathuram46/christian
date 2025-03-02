import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

function Home() {
  const [importantAds, setImportantAds] = useState([])
  const [generalAds, setGeneralAds] = useState([])
  const [mostReadAds, setMostReadAds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:4000/api/advertisements'
        )
        if (Array.isArray(data)) {
          setImportantAds(data.filter((ad) => ad.type === 'important'))
          setMostReadAds(data.filter((ad) => ad.type === 'most-read'))
          setGeneralAds(data.filter((ad) => ad.type === 'general'))
        }
      } catch (err) {
        console.error('Error fetching advertisements:', err)
        setError('Failed to load advertisements.')
      } finally {
        setLoading(false)
      }
    }

    fetchAdvertisements()
  }, [])

  useEffect(() => {
    if (importantAds.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % importantAds.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [importantAds.length])

  if (loading) return <p>Loading advertisements...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <motion.div className="home-container">
      {/* Slider for Important Advertisements */}
      <motion.div className="slider-section">
        <AnimatePresence mode="wait">
          {importantAds.length > 0 && (
            <motion.div
              key={currentIndex}
              className="slider"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={importantAds[currentIndex]?.image}
                alt={importantAds[currentIndex]?.title}
              />
              <h2>{importantAds[currentIndex]?.title}</h2>
              <p>{importantAds[currentIndex]?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {importantAds.length > 1 && (
          <>
            <button
              className="prev-btn"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + importantAds.length) % importantAds.length
                )
              }
            >
              ❮
            </button>
            <button
              className="next-btn"
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % importantAds.length)
              }
            >
              ❯
            </button>
          </>
        )}
      </motion.div>

      {/* Grid Layout for General & Most Read Advertisements */}
      <div className="ads-grid">
        <motion.div className="ads-category">
          <h3>Most Read Advertisements</h3>
          <div className="ads-list">
            {mostReadAds.map((ad, index) => (
              <motion.div key={index} className="ad-item">
                <img src={ad.image} alt={ad.title} />
                <h4>{ad.title}</h4>
                <p>{ad.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="ads-category">
          <h3>General Advertisements</h3>
          <div className="ads-list">
            {generalAds.map((ad, index) => (
              <motion.div key={index} className="ad-item">
                <img src={ad.image} alt={ad.title} />
                <h4>{ad.title}</h4>
                <p>{ad.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
