import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/Church.css";

// Example church data
const churchData = [
  { name: "St. Mary's Church", city: "Madurai" },
  { name: "Sacred Heart Church", city: "Chennai" },
  { name: "St. Thomas Church", city: "Madurai" },
  { name: "Our Lady of Lourdes Church", city: "Coimbatore" },
  { name: "Christ the King Church", city: "Chennai" },
  // More churches...
];

function Church() {
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredChurches, setFilteredChurches] = useState(churchData);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const filtered = city 
      ? churchData.filter(church => church.city === city)
      : churchData;
    setFilteredChurches(filtered);
  };

  return (
    <div className="church-container">
      <h1>Churches in Tamil Nadu</h1>
      
      {/* Dropdown for selecting city */}
      <motion.select
        onChange={handleCityChange}
        value={selectedCity}
        className="city-dropdown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <option value="">Select a city</option>
        <option value="Madurai">Madurai</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        {/* Add more cities */}
      </motion.select>

      {/* Animated Church List */}
      <motion.div
        className="church-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {filteredChurches.map((church, index) => (
          <motion.div 
            key={index}
            className="church-item"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2>{church.name}</h2>
            <p>{church.city}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Church;
