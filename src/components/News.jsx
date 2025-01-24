import React from 'react';
import { motion } from 'framer-motion';
import '../styles/News.css';

function News() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transitions: { duration: 0.6 } },
  };
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transitions: { duration: 0.6 } },
  };
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transitions: { duration: 0.6 } },
  };

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
        {/* Main News Section */}
        <motion.div className="main-news" variants={slideInFromLeft}>
          <div className="main-news-item">
            <motion.img
              src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
              alt="Main News"
              className="main-news-item"
            />
            <div className="main-news-text">
              <motion.h2 variants={fadeIn}>
                Family of Christian woman speak out after hospital removes
                nutrition tube
              </motion.h2>
              <p className="author">Anurah Kumar | Tue 21 Jan 2025 17:07 GMT</p>
              <p>
                Hyacinth McIntosh, 54, was removed from life support and denied
                hydration against her wishes and beliefs, her family has said.
              </p>
            </div>
          </div>
          <div className="secondary-news">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  className="secondary-news-item"
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  variants={fadeIn}
                >
                  <img
                    src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
                    alt="News Thubnail"
                    className="secondary-news-image"
                  />
                  <div className="secondary-news-text">
                    <h3>God is working in all the Time</h3>
                    <p className="author">
                      Staff writer | Tue 21 Jan 2025 18:55 GMT
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
        {/* Most Read Sidebar */}
        <motion.aside className="most-read" variants={slideInFromRight}>
          <h2>Most Read</h2>
          <ol>
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <motion.li
                  key={index}
                  className="most-read-item"
                  whileHover={{ x: 10 }}
                  variants={fadeIn}
                >
                  <img
                    src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
                    alt="Most Read Thumbnail"
                    className="most-read-image"
                  />
                  <span>
                    Placeholder text for Most Read article {index + 1}
                  </span>
                </motion.li>
              ))}
          </ol>
        </motion.aside>
      </div>
    </motion.div>
  )
}

export default News;
