import React, { useContext, useEffect } from 'react'
import styles from "../Styles/about.module.css"

import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'

const About = () => {
  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width
  useEffect(()=>{
    Aos.init({duration:500})
  },[])


  return (
    <div   className={styles.about} id="about">
     
      <div>
      <h1>About</h1>
      <div data-aos={"zoom-in-up"}>

      <p  className={styles.text}>
      Amit Ghosh, An Aspiring Frontend Developer. Looking forward to applying and enhancing my skills and knowledge as a developer.
      </p>

      <p className={styles.email}>Drop a mail @  amitghosh0595c@gmail.com </p>
      </div>
      
      </div>
      
    </div>
  )
}

export default About