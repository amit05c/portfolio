import React, { useContext, useEffect, useState } from "react";
import styles from "../Styles/projects.module.css";
import image1 from "../Images/max1.png";
import image2 from "../Images/mythressa.png";
// import image3 from "../Images/apple.png"
import image4 from "../Images/uboric.png";
import image5 from "../Images/ckockify.png";
import image6 from "../Images/myntra.png";
import image7 from "../Images/connect.png";
import image8 from "../Images/zuruni.png";

import { AiFillGithub } from "react-icons/ai";
// import { SiRedux } from 'react-icons/si';
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaHtml5, FaNodeJs,FaVuejs,FaBootstrap } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiChakraui, SiRedux, SiExpress } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiMongodb } from "react-icons/di"
import Aos from "aos";
import "aos/dist/aos.css";
import { ScreenContext } from "../screenContext/ScreenContext";
import { Tooltip } from "@chakra-ui/react";

const Projects = () => {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { windowDimensions } = useContext(ScreenContext);
  const width = windowDimensions.width;

  // console.log(windowDimensions)
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={styles.projects} id={"projects"}>
      <h1 className={styles.text}>Projects</h1>
      <div className={styles.project_list}>
        {/* all projects */}

        <div data-aos={"zoom-in-up"}>
          <img src={image8} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Digital Business Card</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>This is a real life project</li>
              <li>This is a build by 3 member teams</li>
              <li>Different types of card can be create</li>
              <li>
                User can create and update their's vcard. Payment gateway
                intregration and user notification mail and all others types of real life
                functionlity are created
              </li>
              <li>
                Nest JS, MySQL, Vue 3, Bootstrap are used in this projects.
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <DiMongodb />
              <DiMysql/>
              <FaVuejs />
              <FaBootstrap />
            </div>
          </div>

          <div>
            {/* <a href="https://github.com/amit05c/myntra_clone" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a> */}
            <a href="https://zuruni.io/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>


        <div data-aos={"zoom-in-up"}>
          <img src={image7} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Full stack real time chat application</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>
                This is a solo project which takes almost 3 weeks to create
              </li>
              <li>Can be used for Multi users by using socket io</li>
              <li>
                Login, signup, one on one chat and group chat and search
                functionlities are created
              </li>
              <li>
                NodeJS,Express js, MongoDB, Socket io, React, context-api,
                Chakra ui are used used to build this project
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <DiMongodb />
              <FaNodeJs />
              <SiExpress />
              <RiReactjsLine />
              <SiChakraui />
            </div>
          </div>

          <div>
            <a href="https://github.com/amit05c/connect_app" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a
              href="https://connect-app-backend.onrender.com/"
              target={"_blank"}
            >
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        <div data-aos={"zoom-in-up"}>
          <img src={image6} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Myntra Clone</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>This is a full-stack web app</li>
              <li>This is a solo project</li>
              <li>Can be used for Multi users</li>
              <li>Login, signup, delete, filter functionlities are created</li>
              <li>
                NodeJS, Express js, MongoDB, React, Redux, Chakra ui are used
                used to build this project
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <DiMongodb />
              <FaNodeJs />
              <SiExpress />
              <RiReactjsLine />
              <SiChakraui />
            </div>
          </div>

          <div>
            <a href="https://github.com/amit05c/myntra_clone" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a href="https://myntra-blue.vercel.app/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        <div data-aos={"zoom-in-up"}>
          <img src={image4} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Uboric Clone</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>This is a collaborative project of four members</li>
              <li>Login, signup, filter,sort,cart funtionality are active</li>
              <li>Filter and sort functionality are made by me.</li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <RiReactjsLine />
              <SiRedux />
              <SiChakraui />
            </div>
          </div>

          <div>
            <a href="https://github.com/amit05c/Uboric_Clone" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a href="https://uboric-deploy.vercel.app/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        {/* <div data-aos={"zoom-in-up"}>
          <img src={image5} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Clockify Clone</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>Clockify is time time tracker website.</li>
              <li>
                This is a collaborative Fullstack project of five members.
              </li>
              <li>Login, signup, delete, filter functionlities are created</li>
              <li>In Dashboard page data are show as chart format</li>
              <li>
                NodeJS,Express js, MongoDB, React, Chakra ui are used used to
                build this project
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <FaNodeJs />
              <SiExpress />
              <DiMongodb />
              <RiReactjsLine />
              <SiChakraui />
            </div>
          </div>

          <div>
            <a
              href="https://github.com/amit05c/clockify_clone"
              target={"_blank"}
            >
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a
              href="https://bespoke-rugelach-a7fa44.netlify.app/"
              target={"_blank"}
            >
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div> */}

        

        <div data-aos={"zoom-in-up"}>
          <img src={image1} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Max Fashion clone</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>Max fashion is an online e-comerce website.</li>
              <li>Total time takes: 5days</li>
              <li>Login, signup, filter,sort,cart funtionality are active</li>
              <li>React, Chakra ui are used used to build this project</li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <RiReactjsLine />
              <SiChakraui />
            </div>
          </div>

          <div>
            <a
              href="https://github.com/amit05c/chief-shape-6531"
              target={"_blank"}
            >
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a href="https://chief-shape-6531.vercel.app/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        <div data-aos={"zoom-in-up"}>
          <img src={image2} alt="mythressa_clone" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Mythresa clone</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>
                It is cloned in construct week project. This is a collaborative
                project of 5 members.
              </li>
              <li>
                Login,signup,Filter,sort,cart,and payment and opt authentication
                funtionalities are built.
              </li>
              <li>
                Html, CSS, Javascript, Bootstrap are used used to build this
                project
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <FaHtml5 />
              <IoLogoCss3 />
              <IoLogoJavascript />
              <SiBootstrap />
            </div>
          </div>

          <div>
            <a href="https://github.com/rajpawanku/Mytheresa" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a
              href="https://marvelous-torrone-9bbbc5.netlify.app/index.html"
              target={"_blank"}
            >
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
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
  );
};

export default Projects;
