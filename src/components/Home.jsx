import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
import { AnimatePresence, motion } from 'framer-motion';
function Home({ advertisements }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex + 1) % advertisements.length);
    }, 3000);
    return ()=> clearInterval(interval);
  },[advertisements]);
  return (
    <motion.div className='home-container container-fluid' initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration:1}}>
      <header className="text-center py-3">
        <h1 className="home-title">CHRISTIAN TODAY</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-2"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item mx-2"><a href="#news" className="nav-link">News</a></li>
          <li className="nav-item mx-2"><a href="#district" className="nav-link">District</a></li>
          <li className="nav-item mx-2"><a href="#comment" className="nav-link">Comment</a></li>
          <li className="nav-item mx-2"><a href="" className="nav-link">Video</a></li>
        </ul>
      </nav>
      {/* Slider Container */}
      <div className='slider'>
        <AnimatePresence mode='wait'>
          {advertisements.map(
            (ad, index)=>
              index === currentIndex && (
                <motion.div key={index} className='slider-item' initial={{ opacity: 0, x: 100 }} animate={{ opacity:1, x: 0 }} exit={{ opacity: 0, x: -100}} transition={{ duration: 0.8}}>
                  <img src={ad.image} alt={ad.title} className='ad-image' />
                  <div className="ad-content">
                    <h2 className="ad-title">{ad.title}</h2>
                    <p className="ad-description">{ad.description}</p>
                    <button className='btn-read-more'>Read More</button>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Home
