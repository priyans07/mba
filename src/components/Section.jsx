import React from 'react'
import {motion} from 'framer-motion';
const Section = ({h3,text, hasbtn = true,btntxt, imgsrc,imgSize="70%",backgroundColor,headingColor,textColor,btnbgColor,btncolor}) => {
  const headingOptions={
    initial: {
      y: "-100%",
      opacity:0,}, whileInView:{
        y:"100%",
        opacity:1,
      },
    };
    const textOptions={
      ...headingOptions,
      transition:{
        delay:0.3,
      },
    };
    const buttonOptions={
      initial: {
        y: "100%",
        opacity:0,}, whileInView:{
          y:0,
          opacity:1,
        },
      transition:{
        delay:0.3,
        ease:"easeIn"
      },
    };
    const imgOptions={
      initial: {
        scale:0.1,
        opacity:0,}, whileInView:{
          scale:1,
          opacity:1,
        },
      transition:{
        delay:0.3,
        
      },
    };
  
  return (<section className="section" style={{
    backgroundColor,
  }}>
 <div>
    <motion.h3 style={{
 color:headingColor,
 }} data-cursorpointer={true} {...headingOptions}>{h3}</motion.h3>
    <motion.p style={{
        color:textColor,
    }} data-cursorpointer={true} {...textOptions}>{text}</motion.p>
    {hasbtn && <motion.button style={{
        color:btncolor,
        backgroundColor:btnbgColor,
    }} data-cursorpointer={true} {...buttonOptions}>{btntxt}</motion.button>}
    </div>
    <motion.div {...imgOptions}>
        <img src={imgsrc} alt="this is imgae" style={{
            width:imgSize,
        }}/>
    </motion.div>
  </section>)
}

export default Section