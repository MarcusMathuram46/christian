import React from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 50 }}
    >
      {/* Main Headline */}
      <motion.div
        className="main-headline"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
          alt="Headline Image"
        />
        <h2>
          President Trump: 'I was saved by God to make America great again'
        </h2>
        <p>
          President Donald Trump declared he was "saved by God to make America
          great again" in his Inauguration Day speech on Monday, promising to
          bring the United States into a "golden age."
        </p>
      </motion.div>

      {/* Left Section */}
      <motion.div className="left-section" variants={containerVariants}>
        {[...Array(3)].map((_, idx) => (
          <motion.div
            className="article"
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Sample Article Title {idx + 1}</h3>
            <img
              src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
              alt={`Article ${idx + 1}`}
            />
            <p>Sample description for article {idx + 1}...</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="right-section"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h3>Most Read</h3>
        <ul>
          {[
            "The Faith of the Detransitioners",
            "Another Popular Article",
            "A Trending News Story",
          ].map((text, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Bottom Section */}
      <motion.div className="bottom-section" variants={containerVariants}>
        {[...Array(3)].map((_, idx) => (
          <motion.div
            className="small-article"
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="https://i.postimg.cc/v80JCSCh/bib2.jpg"
              alt={`Small Article ${idx + 4}`}
            />
            <p>Sample Bottom Article {idx + 4}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Home;
