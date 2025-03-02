import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import '../styles/Church.css'

const Church = () => {
  const [churches, setChurches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const churchesPerPage = 6 // Set how many churches per page

  useEffect(() => {
    const fetchChurches = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/churches')
        if (Array.isArray(response.data)) {
          setChurches(response.data)
        } else {
          console.error('Unexpected response format:', response.data)
          setError('Invalid data format received')
        }
      } catch (error) {
        console.error('Error fetching churches:', error)
        setError('Failed to load church data')
      } finally {
        setLoading(false)
      }
    }

    fetchChurches()
  }, [])

  // Pagination Logic
  const indexOfLastChurch = currentPage * churchesPerPage
  const indexOfFirstChurch = indexOfLastChurch - churchesPerPage
  const currentChurches = churches.slice(indexOfFirstChurch, indexOfLastChurch)
  const totalPages = Math.ceil(churches.length / churchesPerPage)

  return (
    <div className="church-container">
      {/* Title Animation */}
      <motion.h2
        className="church-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our Churches
      </motion.h2>

      {/* Conditional Rendering */}
      {loading ? (
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading churches...
        </motion.p>
      ) : error ? (
        <motion.p
          className="error-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      ) : churches.length === 0 ? (
        <motion.p
          className="empty-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No churches found.
        </motion.p>
      ) : (
        <>
          <div className="church-list">
            {currentChurches.map((church) => (
              <motion.div
                key={church._id}
                className="church-card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="church-img-container">
                  <motion.img
                    src={church.image}
                    alt={church.name}
                    className="church-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <div className="church-info">
                  <h3>{church.name}</h3>
                  <p>
                    <strong>Pastor:</strong> {church.pastor}
                  </p>
                  <p className="church-description">{church.description}</p>
                  <p>
                    <strong>Phone:</strong> {church.phone}
                  </p>
                  <p>
                    <strong>Location:</strong> {church.location}
                  </p>
                  <p>
                    <strong>Address:</strong> {church.address}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ❮ Prev
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-btn"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next ❯
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Church
