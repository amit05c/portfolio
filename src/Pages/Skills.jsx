import React from 'react'
import styles from "../Styles/skills.module.css"
import reactLogo from "../Images/react_logo.png"
import javascript from "../Images/javascript_logo.png"
import cssLogo from "../Images/css_logo.png"
import chakraUi from "../Images/chakra_ui.png"
// const skills= [
//   // {image:}
// ]

const Skills = () => {
  return (
    <div className={`${styles.skills} ${styles.text}`} id={"skills"}>
      <h1>Skills</h1>
      <div className={styles.skills_lists}>
        <div> <img src={reactLogo} alt="react_logo" width={"100px"} /></div>
        <div>
         <img src={javascript} width={"90px"}/>
        </div>
        <div>
        <img src={cssLogo} width={"90px"}/>
        </div>
        <div>
        <img src={javascript} width={"90px"}/>
        </div>
        <div>
        <img src={chakraUi} width={"100px"}/>
        </div>
        <div>
        <img src={javascript} width={"90px"}/>
        </div>
      </div>
    </div>
  )
}

export default Skills