import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const containerVariant = {
  hidden: {
    x: '100vw',
    opacity: 0
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type:"spring", 
      delay:0.5,
      mass:0.4,
      damping:8,
      when: "beforeChildren",
      staggerChildren:0.75
    }
  },

  exit:{
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }

}

const childVariant = {
  hidden:{
    opacity:0
  },

  visible:{
    opacity:1
  }
}
const Order = ({ pizza,setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    },5000)
  }, [setShowModal])


const [showTitle, setShowTitle] = useState(true)
setTimeout(() => {
  setShowTitle(false)
}, 4000)

  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {showTitle && (
        <h2 >
          Thank you for your order :)
        </h2>
      )}
      
      
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariant}
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      </motion.div>
    </motion.div>
  )
}

export default Order;