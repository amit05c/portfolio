import React, { useEffect } from 'react'
import styles from "../Styles/projects.module.css"
import image1 from '../Images/max1.png'
import image2 from "../Images/mythressa.png"
import image3 from "../Images/apple.png"

import { AiFillGithub } from 'react-icons/ai';
import Aos from 'aos'
import "aos/dist/aos.css"

const Projects = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div  className={styles.projects} id={"projects"}>
      <h1 data-aos="fade-up" className={styles.text}>Projects</h1>
      <div className={styles.project_list}>
        <div data-aos="fade-left"  >
          <img src={image1} alt="max_fashion" width={"100%"}  />
          <h2 style={{backgroundColor:"whitesmoke"}}>Max Fashion clone</h2>
          <p style={{backgroundColor:"whitesmoke", borderRadius:"10%"}}>Max fashion is an online e-comerce website.

            {/* <br /> */}
            
            {/* <br /> */}
          </p>
          <div>
          <p style={{backgroundColor:"whitesmoke"}}>Total time takes: 5days</p>
            <p style={{backgroundColor:"whitesmoke"}}>Login, signup, filter,sort,cart funtionality are active</p>
          </div>
            
          <div>
          <a href="https://github.com/amit05c/chief-shape-6531" target={"_blank"}><button>Github link</button></a>
          <a href="https://github.com/amit05c/chief-shape-6531" target={"_blank"}><button>Project link</button></a>
           
            
          </div>
        </div>

        <div data-aos="fade-right">
        <img src={image2} alt="mythressa_clone" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet.</h2>
          <p style={{backgroundColor:"whitesmoke"}}>It is clone in construct week project. This is a collaborative project of 5 members.</p>
          <p style={{backgroundColor:"whitesmoke"}}>Login,signup,Filter,sort,cart,and payment and opt authentication funtionalities are built.</p>
          <div >
          <a  href="https://github.com/rajpawanku/Mytheresa" target={"_blank"}><button>Github link</button></a>
          <a href="https://marvelous-torrone-9bbbc5.netlify.app/index.html" target={"_blank"}><button>Project link</button></a>
            
          </div>
        </div>

        <div data-aos="fade-left">
        <img src={image3} alt="apple_clone" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet.</h2>
          <p style={{backgroundColor:"whitesmoke"}}>This is a collaborative project of 5 members. <br>
          </br>
          Login,signup, filter functionality are developed.
          </p>
          <div>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button>Github link</button></a>
          <a href="https://github.com/harshalpatil655/Apple-Clone-Masai" target={"_blank"}><button>Project link</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects