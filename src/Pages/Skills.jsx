import React, { useContext, useEffect } from 'react'
import styles from "../Styles/skills.module.css"
import reactLogo from "../Images/react_logo.png"
import javascript from "../Images/javascript_logo.png"
import cssLogo from "../Images/css_logo.png"
import chakraUi from "../Images/chakra_ui.png"
import bootstrap from "../Images/bootstrap.png"
import Redux from "../Images/Redux.png"

import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'

// const skills= [
//   // {image:}
// ]

const Skills = () => {

  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width


  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


  return (
    <div  className={`${styles.skills} ${styles.text}`} id={"skills"}>
      <h1 data-aos={width>920 ? "fade-up" : ""} >Skills</h1>
      <div className={styles.skills_lists}>
        <div data-aos={width>920 ? "fade-left" : ""}>  <img  src={reactLogo} alt="react_logo" width={"100px"} /></div>
        <div data-aos={width>920 ? "fade-left" : ""}>
         <img src={Redux} alt={"redux_logo"} style={{backgroundColor:"whitesmoke", borderRadius:"48%"}} width={"100px"} />
        </div>
        
        <div data-aos={width>920 ? "fade-right" : ""}>
        <img src={javascript} alt={"javascript_logo"} width={"85px"} style={{borderRadius:"60%"}}/>
        </div>

        <div data-aos={width>920 ? "fade-left" : ""}>
        <img src={cssLogo} alt={"css_logo"} width={"90px"} style={{borderRadius:"50%"}} />
        </div>

        <div data-aos={width>920 ? "fade-right" : ""}>
        <img src={chakraUi} alt={"chakra_logo"} width={"100px"} style={{borderRadius:"50%"}} />
        </div>
        <div data-aos={width>920 ? "fade-right" : ""}>
        <img src={bootstrap} alt={"bootstrap_logo"} width={"90px"} style={{borderRadius:"50%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Skills