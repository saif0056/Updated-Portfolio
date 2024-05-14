import React from 'react'
import '../sass/little.scss';
import { motion } from "framer-motion";
const Little = () => {
  return (
    <div className="little">
      {window.screen.width>913 ? (
        <>
        <motion.h1 initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{type:"tween"}}
>Ambitious developer with a</motion.h1>
        <motion.h1 initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{type:"tween"}}
 >passion to solve modern </motion.h1 > <motion.h1 initial={{ scale: 0 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }} transition={{type:"tween"}}
>problems!</motion.h1> 
        </>
      ) : (
        <motion.h1 initial={{ scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{type:"tween"}}
>Ambitious developer with a
       passion to solve modern problems!</motion.h1>
      )}
    </div>
  )
}

export default Little