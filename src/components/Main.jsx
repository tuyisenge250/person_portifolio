import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Service from "./Services";
import Education from "./Education"
import { educationInfo } from "../EducationInfo";
import { useState } from "react";
import Progress from "./Progress";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import html  from "../assets/Html.png"
import css from "../assets/css.png"
import django from '../assets/django_python.png';
import Language from "./Language";
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import next from "../assets/nextjs.png"
import Portifolio from "./portfolio";
import extension from "../assets/google_extension.png"
import Footer from "./Footer";
import Contact from "./contact";
import resume from "../assets/resume.pdf"
import { FaAlignJustify } from "react-icons/fa";


export default function Main(){
    const [level, setLevel] = useState("Courses")
    const educationLevel = ["Primary", "Secondary", "University", "Courses"]
    function handleClickCourse(level){
        setLevel(level)
    }
    const educationLevelElement = educationInfo.map((lev) => {
        return (lev.show === level ? 
            <Education 
               name={lev.name} 
               location={lev.location}
               level={lev.level}
               courses={lev.courses}
               description={lev.description}
               />: null)
    }
    )
    
    const educationElement = educationLevel.map(level => <button onClick={() => handleClickCourse(level)}>{level}</button>)
    return (
        <main>
            <section className="top" id="top">
                <div className="content">
                    <p className="salutation">________Hello</p>
                    <h2>I am <span>Tuyisenge Benjamin</span></h2>
                    <h4>Front-end | Back-end <span>Developer</span></h4>
                    <p className="description">A passionate full-stack developer with expertise in creating dynamic, 
                        user-focused web applications using modern technologies like React, 
                        Django, and Flask. Skilled in both <span>frontend and backend development</span>, 
                        I deliver efficient, scalable solutions tailored to client needs</p>
                    <div className="icon">
                        <a ><FontAwesomeIcon icon={faFacebook} size="2x" color="#D6B11C" style={{ margin: "0 10px" }} /></a>
                        <a href="https://www.linkedin.com/in/benjamin-tuyisenge-119457284" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#D6B11C" style={{ margin: "0 10px" }} /></a>
                        <FontAwesomeIcon icon={faTwitter} size="2x" color="#D6B11C" style={{ margin: "0 10px" }} />
                        <a href={resume} className="resume" download>
                           Resume
                        </a>
                    </div>
                </div>
            </section>
            <p className="features" id="service">______Features & Service______</p>
            <section className="services" >
                <Service 
                   Icon={<FontAwesomeIcon icon={faWindowRestore} color="#D6B11C" size="2x"/>}
                   title="font-end dev"
                   describe=" I offer frontend development services, crafting visually appealing and responsive web applications using React.js, Vue.js, HTML, CSS, and JavaScript, focused on delivering seamless user experiences."
                />
                <Service 
                   Icon={<FontAwesomeIcon icon={faCode} color="#D6B11C" size="2x"/>}
                   title="Back-end dev"
                   describe=" I offer frontend development services, crafting visually appealing and responsive web applications using React.js, Vue.js, HTML, CSS, and JavaScript, focused on delivering seamless user experiences."
                />
                <Service 
                   Icon={<FontAwesomeIcon icon={faServer}  color="#D6B11C" size="2x"/>}
                   title="Devops dev"
                   describe=" I offer frontend development services, crafting visually appealing and responsive web applications using React.js, Vue.js, HTML, CSS, and JavaScript, focused on delivering seamless user experiences."
                />
            </section>
            <p className="features" id="education">______About me</p>
            <section className="about-me">
                <h1>Tuyisenge Benjamin</h1>
                <p>I am a full-stack developer, having graduated from the African 
                    Leadership X in Software in 2024 after completing an intensive 
                    year-long coding bootcamp. Specializing in backend development, 
                    I have expertise in Python, along with frameworks like Django and Flask. 
                    Currently, I am a software engineering student at the University of Rwanda, 
                    always striving to enhance my skills. On the frontend, 
                    I work with HTML, CSS, JavaScript, and React, while focusing on backend projects, 
                    including a collaborative <span>e-commerce platform</span> and the <span>full-stack FarmerSync project</span>. 
                    In my free time, I enjoy playing football and basketball, 
                    but I also like running and swimming to stay active.
                    </p>
            </section>
            <p className="features">______education</p>
            <section className="education">
                <div className="ed-btn">
                    {educationElement}
                </div>
                {educationLevelElement}
            </section>
            <p className="features">______Skills</p>
            <section className="skills" id="skills">
                {/* <Progress width="98%" name="HTML"/>
                <Progress width="90%" name="CSS"/>
                <Progress width="85%" name="javascript"/>
                <Progress width="80%" name="React"/>
                <Progress width="85%" name="Python"/>
                <Progress width="80%" name="Flask"/>
                <Progress width="80%" name="Djando"/>
                <Progress width="85%" name="Mysql"/>
                <Progress width="75%" name="mongoDB"/>*/}
                <Language image={html} name="Html text language" level="99%"/>
                <Language image={react} name="Html text language" level="85%"/>
                <Language image={css} name="Html text language" level="90%"/>
                <Language image={django} name="Html text language" level="85%"/> 
                <Language image={javascript} name="Html text language" level="90%"/> 
                <Language image={next} name="Html text language" level="80%"/> 
                {/* <Language image={html} name="Html text language" level="99%"/>    */}
            </section>
            <p className="features">______portifolio</p>
            <section className="potifolio" id="experience">
                <Portifolio
                  Icon={<FontAwesomeIcon icon={faGithub} color="#D6B11C" size="2x"/>}
                  link="https://github.com/Uwiringiyimana2/UB_e_commerce_api/tree/b_commerce"
                  title="E-commerce API"
                  describe="I contributed to the backend development of a collaborative e-commerce project using Flask, focusing on creating robust APIs for managing products, users, and shopping carts. The project also integrated secure payment gateways like Stripe and implemented JWT authentication for user authorization. More click on git icon visit our Repository"
                />
                <Portifolio
                  Icon={<FontAwesomeIcon icon={faGithub} color="#D6B11C" size="2x"/>}
                  link="https://github.com/tuyisenge250/farmSycn/tree/full_code_base_v2"
                  title="FarmSync"
                  describe="FarmSync is a full-stack project built with Django, designed to streamline cooperative farm management, focusing on stock management and geolocation for agricultural cooperatives. The platform provides a detailed overview of each cooperative's performance, including stock levels, financial data, and operational metrics, with a user-friendly frontend and a powerful backend to support data integrity and efficient workflows"
                />
                <Portifolio
                  Icon={<FontAwesomeIcon icon={faGithub} color="#D6B11C" size="2x"/>}
                  link="https://github.com/tuyisenge250/farmSycn/tree/full_code_base_v2"
                  title="Game"
                  describe="The React-based word-guessing game is an interactive and engaging application where players attempt to guess a hidden word by inputting letters. The game features real-time feedback, highlighting correct guesses and tracking incorrect attempts with a limited number of chances. Designed with React, it offers a dynamic user interface, responsive gameplay, and a fun way to test vocabulary and problem-solving skills."
                />
                <Portifolio 
                 image={extension}
                 describe="Developed a custom Google Chrome extension to provide quick access to essential data, including real-time climate status, cryptocurrency trends, and local time. The extension also features an automated image generation tool for enhanced user functionality."
                />
            </section>
            <p className="features" id="contact" style={{marginBottom: "10px"}}>______contact</p>
            <section class="contact">
                <Contact />
            </section>
            <Footer />
            
        </main>
    )
}