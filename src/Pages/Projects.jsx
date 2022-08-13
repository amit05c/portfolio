import React from 'react'
import styles from "../Styles/projects.module.css"
import image1 from '../Images/max1.png'

const Projects = () => {
  return (
    <div className={styles.projects} id={"projects"}>
      <h1 className={styles.text}>Projects</h1>
      <div className={styles.project_list}>
        <div >
          <img src={image1} alt="" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet.</h2>
          <p style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, libero corrupti. Similique nobis ipsam rem illum exercitationem rerum sunt nemo?</p>
        </div>
        <div>
        <img src={image1} alt="" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet.</h2>
          <p style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, libero corrupti. Similique nobis ipsam rem illum exercitationem rerum sunt nemo?</p>
        </div>
        <div>
        <img src={image1} alt="" width={"100%"} />
          <h2 style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet.</h2>
          <p style={{backgroundColor:"whitesmoke"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, libero corrupti. Similique nobis ipsam rem illum exercitationem rerum sunt nemo?</p>
        </div>
      </div>
    </div>
  )
}

export default Projects