import React, { useContext, useEffect } from 'react'
import styles from "../Styles/contact.module.css"
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneInbound } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Aos from 'aos'
import "aos/dist/aos.css"
import { ScreenContext } from '../screenContext/ScreenContext'

const Contact = () => {
  const {windowDimensions}= useContext(ScreenContext)
  const width=windowDimensions.width

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


  return (
    <div className={styles.contact} id={'contact'}>
        <h1 data-aos={width>920 ? "fade-up" : ""} >Contacts</h1>
        <div className={styles.contact_list}>
            <div data-aos={width>920 ? "fade-left" : ""} ><a className={styles.logo} href="https://github.com/amit05c" target={"_balnk"}><AiFillGithub fontSize={"larger"}/></a></div>
            <div data-aos={width>920 ? "fade-left" : ""} ><a className={styles.logo} href="mailto:amitghosh0595c@gmail.com" target={"_balnk"}><AiOutlineMail fontSize={"larger"}/></a></div>
            <div data-aos={width>920 ? "fade-left" : ""} className={styles.logo} onClick={()=>alert(`Phone no is 7551021361`)}><BsTelephoneInbound fontSize={"larger"}/></div>
            <div data-aos={width>920 ? "fade-right" : ""}><a className={styles.logo} href="https://www.linkedin.com/in/amit-ghosh-0b6807228/" target={"_blank"}><BsLinkedin fontSize={"larger"} /></a></div>
            <div data-aos={width>920 ? "fade-right" : ""}><a className={styles.logo} href="https://twitter.com/Amit05C" target={"_blank"}><FiTwitter fontSize={"larger"}/></a></div>
        </div>
        <div className={styles.copy}>
          <h3>© 2022 copyright all right reserved</h3>
        </div>
    </div>
  )
}

export default Contact