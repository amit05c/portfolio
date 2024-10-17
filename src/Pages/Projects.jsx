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
import dtime from "../Images/dtime.png"
import chatappImg from "../Images/ChatApp.png"
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { FaTailwind } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
// import { SiRedux } from 'react-icons/si';
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaHtml5, FaNodeJs, FaVuejs, FaBootstrap } from "react-icons/fa";
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
// import { RiNextjsFill } from "react-icons/ri";
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
            <a href="https://myntra-clone-delta-three.vercel.app/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        <div data-aos={"zoom-in-up"}>
          <img src={chatappImg} alt="max_fashion" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Chat App</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>This is a chat app</li>
              <li>This is a solo project</li>
              <li>Login, signup, Individual chat and group freatures has been implemented</li>
              <li>Can be used for Multi users</li>
              <li>
                NodeJS, Express js, MongoDB, HTML, CSS, and Javascript are used
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
              <FaHtml5/>
              <IoLogoJavascript />
              <IoLogoCss3 />
            </div>
          </div>

          <div>
            <a href="https://github.com/amit05c/server" target={"_blank"}>
              <button>
                <AiFillGithub fontSize={"large"} />
              </button>
            </a>
            <a href="https://server-ry4n.onrender.com" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

        <div data-aos={"zoom-in-up"}>
          <img src={dtime} alt="dtime" className={styles.heroimg} />
          <div className={styles.project_info}>
            <h2>Dtechtive</h2>
            <ul style={{ listStyleType: "square" }}>
              <li>This is a real life project</li>
              <li>This is a build by 7-8 member teams</li>
              <li>Dtechtive is a search engine that helps people find datasets from websites that existing search engines fail to index.</li>
              <li>
                Payment gateway
                intregration and user notification mail and all others types of real life
                functionlity are created
              </li>
              <li>
                Nest JS, PostgreSQL, Tailwind are used in this projects.
              </li>
            </ul>
          </div>

          <div className={styles.techstack}>
            <h1>Techstack :</h1>
            <div>
              <TbBrandNextjs />
              <SiPostgresql />
            </div>
          </div>


          <div>

            <a href="https://zuruni.io/" target={"_blank"}>
              <button>
                <HiOutlineExternalLink fontSize={"large"} />
              </button>
            </a>
          </div>
        </div>

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
              <DiMysql />
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

      </div>
    </div>
  );
};

export default Projects;
