import React, { useEffect } from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Navbar from '../Components/Navbar'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import styles from "../Styles/home.module.css"
import Images from "../Images/amit_image.png"
import Contact from './Contact'
import resume from "../Resume/resume.pdf"
import { AiFillGithub } from 'react-icons/ai';
import GithubCalendar from './GithubCalendar'


const Home = () => {
    

  return (
    <div className={styles.home}>
       
        <Navbar/>
        <div className={styles.intro}>
          <div > 
         <img className={styles.photo} src={Images} alt="amit_photo" />

          </div>
          {/* style={{border: "1px solid green"}} */}
        <div  >
        <h1 className={styles.text}>Hi, 👋 </h1>
        <h1 className={styles.text}>I am <span className={styles.name}>Amit</span></h1>
         <h2 className={styles.text}>Frontend Developer</h2>

         <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
        <a href={resume} download><button className={styles.resume}> Resume</button></a>
         <a className={styles.logo} href="https://github.com/amit05c" target={"_blank"}><AiFillGithub/></a>
         
        </div>
        </div>
        
      </div>

        <About />
        <Projects  />
        <Skills />
        <GithubCalendar/>
        <Contact />

        
    </div>
  )
}

export default Home