import React, { useEffect } from 'react'
import styles from "../Styles/about.module.css"

import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


  return (
    <div   className={styles.about} id="about">
     
      <div>
      <h1 data-aos="fade-up">About</h1>
      <div style={{width:"40%"}}>

      <p data-aos="fade-up" className={styles.text}>
      Amit Ghosh, An Aspiring Frontend Developer. Looking forward to applying and enhancing my skills and knowledge as a developer.
      </p>

      <p data-aos="fade-up" className={styles.email}>Drop a mail @  amitghosh0595c@gmail.com </p>
      </div>
      
      </div>
      
    </div>
  )
}

export default About