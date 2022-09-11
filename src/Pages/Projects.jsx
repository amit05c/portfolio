import React, { useContext, useEffect, useState } from 'react'
import styles from "../Styles/projects.module.css"
import image1 from '../Images/max1.png'
import image2 from "../Images/mythressa.png"
import image3 from "../Images/apple.png"
import image4 from "../Images/uboric.png"


import { AiFillGithub } from 'react-icons/ai';
// import { SiRedux } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiChakraui,SiRedux } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'


const Projects = () => {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width

  console.log(windowDimensions)
  useEffect(()=>{
    
    Aos.init({duration:1000})
    
  },[])

  return (
    <div  className={styles.projects} id={"projects"}>
      <h1 data-aos={ "fade-up"} 
      className={styles.text}>Projects</h1>
      <div className={styles.project_list}>


      <div data-aos={"flip-up"}>
          <img src={image4} alt="max_fashion" width={"100%"}  />
          
          <h2 style={{backgroundColor:"whitesmoke", fontWeight:"bolder"}}>Uboric Clone</h2>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>This is a collaborative project of four members</p>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Login, signup, filter,sort,cart funtionality are active</p>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Filter and sort functionality are made by be.</p>
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <RiReactjsLine/>
            <SiRedux/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/amit05c/exclusive-oatmeal-9601" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://exclusive-oatmeal-9601.vercel.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>
















        <div data-aos={"flip-up"}>
          <img src={image1} alt="max_fashion" width={"100%"}  />
          
          <h2 style={{backgroundColor:"whitesmoke", fontWeight:"bolder"}}>Max Fashion clone</h2>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Max fashion is an online e-comerce website.</p>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Total time takes: 5days</p>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Login, signup, filter,sort,cart funtionality are active</p>
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/amit05c/chief-shape-6531" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://chief-shape-6531.vercel.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>

        <div data-aos={"flip-up"} >
        <img src={image2} alt="mythressa_clone" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke", fontWeight:"bolder"}}>Mythresa clone</h2>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>It is cloned in construct week project. This is a collaborative project of 5 members.</p>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>Login,signup,Filter,sort,cart,and payment and opt authentication funtionalities are built.</p>
          
          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <FaHtml5/>
            <IoLogoCss3/>
            <IoLogoJavascript/>
            <SiBootstrap/>
            </div>
            
          </div>

          
          <div >
          <a  href="https://github.com/rajpawanku/Mytheresa" target={"_blank"}><button><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://marvelous-torrone-9bbbc5.netlify.app/index.html" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
            
          </div>

        </div>
{/* 
        <div data-aos={width>920 ? "flip-up" : ""} >
        <img src={image3} alt="apple_clone" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke", fontWeight:"bolder"}}>Apple cone</h2>
          <p style={{backgroundColor:"whitesmoke", fontWeight:"bold"}}>This is a collaborative project of 5 members. <br>
          </br>
          Login,signup, filter functionality are developed.
          </p>
          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
            <FaHtml5/>
            <IoLogoCss3/>
            <IoLogoJavascript/>
            </div>
            
          </div>
          <div>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects