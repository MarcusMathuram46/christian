import React from 'react'
import "../styles/TamilNadu.css"
import { motion } from "framer-motion";

const cities = [
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli",
  "Vellore", "Erode", "Thoothukudi", "Tiruppur", "Nagercoil", "Thanjavur",
  "Dindigul", "Kanchipuram", "Karur", "Cuddalore", "Sivakasi", "Udhagamandalam (Ooty)",
  "Namakkal", "Pudukkottai", "Dharmapuri", "Krishnagiri", "Nagapattinam", "Ariyalur",
  "Perambalur", "Ramanathapuram", "Virudhunagar", "Tenkasi", "Theni", "Mayiladuthurai"
];
function TamilNadu() {
  return (
    <motion.div className="tamilnadu-container" initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 1 }}>
      <h1 className="tamilnadu-title">Cities in Tamil Nadu</h1>
      <motion.div className="cities-list" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} transition={{ staggerChildren: 0.1 }}>
        {cities.map((city, index)=>(
          <motion.div className="city-card" key={index} whileHover={{ scale:1.1, rotate: 1}} whileTap={{ scale: 0.95}}>{city}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default TamilNadu
