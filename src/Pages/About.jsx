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
      <h1 style={{textDecoration:"underline"}}>About</h1>
      <div data-aos={"zoom-in-up"}>

      <p  className={styles.text}>
      {/* Amit Ghosh, An Aspiring Frontend Developer. Looking forward to applying and enhancing my skills and knowledge as a developer. */}
      Frontend Developer with 2 years of experience, passionate about creating dynamic and user-friendly web applications. Looking forward to applying my skills in modern web technologies while continuously expanding my knowledge and expertise as a developer.
      </p>

      <p className={styles.email}>Drop a mail @  amitghosh0595c@gmail.com </p>
      </div>
      
      </div>
      
    </div>
  )
}

export default About