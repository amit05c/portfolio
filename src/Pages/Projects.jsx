import React, { useContext, useEffect, useState } from 'react'
import styles from "../Styles/projects.module.css"
import image1 from '../Images/max1.png'
import image2 from "../Images/mythressa.png"
// import image3 from "../Images/apple.png"
import image4 from "../Images/uboric.png"
import image5 from "../Images/ckockify.png"
import image6 from "../Images/myntra.png"


import { AiFillGithub } from 'react-icons/ai';
// import { SiRedux } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaHtml5,FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiChakraui,SiRedux,SiExpress } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'


const Projects = () => {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width

  // console.log(windowDimensions)
  useEffect(()=>{
    
    Aos.init({duration:500})
    
  },[])

  return (
    <div  className={styles.projects} id={"projects"}>
      <h1 
      className={styles.text}>Projects</h1>
      <div className={styles.project_list}>

      <div data-aos={"zoom-in-up"}>
          <img src={image6} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
          <h2 >Myntra Clone</h2>
          <p>{`1. `}This is a full-stack web app</p>
          <p >{`2. `}This is a solo project</p>
          <p >{`2. `}Can be used for Multi users</p>
          <p>{`3. `}Login, signup, delete, filter functionlities are created</p>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <DiMongodb/>
            <FaNodeJs/>
            <SiExpress/>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/amit05c/myntra_clone" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://myntra-blue.vercel.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>



      <div data-aos={"zoom-in-up"}>
          <img src={image5} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
          <h2 >Clockify Clone</h2>
          <p>{`1. `}Clockify is time time tracker website.</p>
          <p >{`2. `}This is a collaborative Fullstack project of five members.</p>
          <p>{`3. `}Login, signup, delete, filter functionlities are created</p>
          <p>{`4. `}In Dashboard page data are show as chart format</p>
          </div>
          
          


          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div
            >
            <FaNodeJs/>
            <SiExpress/>
            <DiMongodb/>
            <RiReactjsLine/>
            <SiChakraui/>
            </div>
            
          </div>
            
          <div>
          <a href="https://github.com/Devashishsaurabh/fixed-thread-889" target={"_blank"}><button ><AiFillGithub fontSize={"large"} /></button></a>
          <a href="https://clockify-clone-masai.netlify.app/" target={"_blank"}><button><HiOutlineExternalLink fontSize={"large"}/></button></a>
           
            
          </div>
        </div>


      <div data-aos={"zoom-in-up"}>
          <img src={image4} alt="max_fashion" className={styles.heroimg}  />
          <div className={styles.project_info}>
          <h2>Uboric Clone</h2>
          <p >{`1. `}This is a collaborative project of four members</p>
          <p>{`2. `}Login, signup, filter,sort,cart funtionality are active</p>
          <p>{`3. `}Filter and sort functionality are made by me.</p>
          </div>
          
          


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


        <div data-aos={"zoom-in-up"}>
          <img src={image1} alt="max_fashion" className={styles.heroimg}  />
          <div className={styles.project_info}>
          <h2>Max Fashion clone</h2>
          <p>{`1. `}Max fashion is an online e-comerce website.</p>
          <p>{`2. `}Total time takes: 5days</p>
          <p>{`3. `}Login, signup, filter,sort,cart funtionality are active</p>
          </div>
          
          


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

        <div data-aos={"zoom-in-up"} >
        <img src={image2} alt="mythressa_clone" className={styles.heroimg} />
        <div className={styles.project_info}>
        <h2>Mythresa clone</h2>
          <p>{`1. `}It is cloned in construct week project. This is a collaborative project of 5 members.</p>
          <p>{`2. `}Login,signup,Filter,sort,cart,and payment and opt authentication funtionalities are built.</p>
        </div>
          
          
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