import React, { useContext, useEffect } from "react";
import styles from "../Styles/skills.module.css";
import reactLogo from "../Images/react_logo.png";
import javascript from "../Images/javascript_logo.png";
import cssLogo from "../Images/css_logo.png";
import chakraUi from "../Images/chakra_ui.png";
import bootstrap from "../Images/bootstrap.png";
import Redux from "../Images/Redux.png";
import Dsa from "../Images/dsa_photo.jpeg";
import { DiMongodb } from 'react-icons/di';
import { FaHtml5,FaNodeJs } from 'react-icons/fa';
import { SiChakraui,SiRedux,SiExpress } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
// import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandJavascript,TbBrandTailwind } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io';
import Aos from "aos";
import "aos/dist/aos.css";
import { ScreenContext } from "../screenContext/ScreenContext";
import { Text } from "@chakra-ui/react";

// const skills= [
//   // {image:}
// ]

const Skills = () => {
  const { windowDimensions } = useContext(ScreenContext);
  const width = windowDimensions.width;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={`${styles.skills} ${styles.text}`} id={"skills"}>
      <h1>Skills</h1>
      <div className={styles.skills_lists}>
        <div className={styles.logo} data-aos={"zoom-in-up"}>
          {/* <img src={reactLogo} alt="react_logo" width={"70%"}  /> */}
          < FaNodeJs className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Node Js</Text>

        </div>

        <div className={styles.logo} data-aos={"zoom-in-up"}>
         
          <SiExpress  className={styles.photo}/>
          <Text fontSize={['lg','lg','lg']}>Express Js</Text>
        </div>



        <div className={styles.logo} data-aos={"zoom-in-up"}>
         
          <DiMongodb className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Mongo</Text>
        </div>



        <div className={styles.logo} data-aos={"zoom-in-up"}>
         
          <RiReactjsLine  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>React</Text>
        </div>


        <div className={styles.logo} data-aos={"zoom-in-up"}>
          <SiRedux  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Redux</Text>
        </div>

        <div className={styles.logo} data-aos={"zoom-in-up"}>
          
           <TbBrandJavascript  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Javascript</Text>

        </div>

        <div className={styles.logo} data-aos={"zoom-in-up"}>
          {/* <img
            src={chakraUi}
            alt={"chakra_logo"}
            width={"80%"}
            
          /> */}
           <FaHtml5  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>HTML</Text>
        </div>
        <div className={styles.logo} data-aos={"zoom-in-up"}>
          {/* <img
            src={bootstrap}
            alt={"bootstrap_logo"}
            width={"70%"}
            
          /> */}
           <IoLogoCss3  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>CSS</Text>

        </div>

        <div className={styles.logo} data-aos={"zoom-in-up"}>
         <SiChakraui  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Chakra UI</Text>
        </div>

        <div className={styles.logo} data-aos={"zoom-in-up"}>
         <TbBrandTailwind  className={styles.photo}/>
          <Text fontSize={['sm','md','lg']}>Tailwind CSS</Text>
        </div>
      </div>
    </div>
  );
};

export default Skills;
