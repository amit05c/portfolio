import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from "./navbar.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from 'react';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
   const handleMenuIcon = ()=>{
  setShowMediaIcons(!showMediaIcons)
   }
   
   function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  

   useEffect(()=>{
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
      
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
        
        
   },[])


   useEffect(()=>{
    if(windowDimensions.width>720){
      setShowMediaIcons(false)
    }
   },[windowDimensions.width])
   console.log(windowDimensions)
   console.log(showMediaIcons)
  return (
    <div className={styles.main_nav}>

<div className={`${styles.hamburger_menu}`}>
            <a href="#" onClick={handleMenuIcon}>
              <GiHamburgerMenu />
            </a>
          </div>

    <div className={showMediaIcons && windowDimensions.width<920 ? styles.mobile_view : styles.navbar }
        
    >
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}
        // onClick={closeMenu} 
        className={styles.help}
        >About</Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className={styles.help}>Projects</Link>
        <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className={styles.help}>Skills</Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={styles.help}>Contact</Link>

    </div>
      
    

    </div>

  )
}

export default Navbar