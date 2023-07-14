import React from "react";
import '../Styles/Header.css'
import {FaLinkedin, FaGithub, FaAward, FaUserGraduate, FaCheckCircle,FaAngleDoubleDown, FaEnvelope } from 'react-icons/fa'; 

function Header() {
  return (
    <div>
{/* .........................nav starts.......................................*/}

      <nav>
       <div className="container nav-container">
        <a href="" className="logo">Quikmax</a>

        <ul className="nav-link">
          <li><a href="#About">About</a></li>

          <li><a href="#Experiences">Expriences</a></li>

          <li><a href="#Projects">Projects</a></li>

          <li><a href="#Contact">Contact</a></li>
 
        </ul>
       </div>
      </nav>

  


{/* ..............................nav ends here................................  */}




{/* ...................................introduction starts here..................*/}


      <header>
        <div className="row">
          <div className="col">
            <div className="page header-container">
              <div className="header-left">
              <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.597781842.1685241639&semt=ais"/>
              </div>

              <div className="header-right">
                <p><b>Hello, I'm</b></p>
                <h1>Quikmax</h1>
                <h2>FrontEnd Developer</h2>
                <div className="header-action-aria">
                  <a href="" className="btn border-dark">Download cv</a>
                  <a href="#Contact" className="btn text-bg-dark">Contact info</a>
                </div>
                <div className="pg-icon header-social">
                  <a href=""><FaLinkedin className="linkedin"/></a>
                  <a href=""><FaGithub className="github" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


{/* {/* ............................introdcution ends here.................... */}




{/* .........................about starts here.................................. */}


     <section id="About">
      <div className="row">
        <div className="col">

          <p className="heading-p">Get To Know More</p>
          <h1 className="heading">About Me</h1>
      
        
            <div className="container about-container">

            <div className="about-left">
              <img src="https://img.freepik.com/premium-photo/asian-woman-smiling-suit_180547-4126.jpg?size=626&ext=jpg&ga=GA1.2.597781842.1685241639&semt=ais" className="img"/>
            </div>

            <div className="about-right">
              <div className="basic-edu">
              <div className="edu-box">
                <FaAward className="award"/>
                <h4>Experience</h4>
                <p>2+ years <br/> FrontEnd Developer</p>
              </div>

              <div className="edu-box">
                <FaUserGraduate className="graduate" />
                <h4>Education</h4>
                <p>Bachelors Degree <br/> M.Sc Masters Degree</p>
              </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Eligendi qui deleniti consequatur perferendis  vitae reprehenderit odit est et libero  quas.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Eligendi qui deleniti consequatur perferendis vitae reprehenderit odit est et libero quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui deleniti consequatur perferendis vitae reprehenderit odit est et libero quas.
              </p>

            </div>
            </div>  
        </div>
      </div>
     </section>



{/* .........................ends here ......................................... */}




{/* .........................experience starts here ............................ */}


<section id="Experiences">
  <div className="row">
    <div className="col">
      <a href="#Experiences" className="arrow"><FaAngleDoubleDown className="angle"/></a>
        <p className="heading-p">Explore My</p>
        <h1 className="heading">Experience</h1>
          <div className="container experience-container">
          <div className="experience-box">
          <h2>FrontEnd Development</h2>

          <div className="experience">
            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>HTML</h4>
              <p>Experienced</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>CSS</h4>
              <p>Experienced</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>SASS</h4>
              <p>Intermediate</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>JAVASCRIPT</h4>
              <p>Basic</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>VUE.JS</h4>
              <p>Intermediate</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>REACT</h4>
              <p>Intermediate</p>
            </div>
            </div>
          </div>
          </div>

          <div className=" experience-box">
          <h2>BackEnd Development</h2>

          <div className="cls experience">
            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>PostgreSQL</h4>
              <p>Basic</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>Node JS</h4>
              <p>Basic</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>Express</h4>
              <p>Basic</p>
            </div>
            </div>

            <div className="ex-div">
            <FaCheckCircle  className="circle"/>
            <div className="html-box">
              <h4>Git</h4>
              <p>Basic</p>
            </div>
            </div>
          </div>
          </div>
          </div>  
    </div>
  </div>
</section>

{/* .................................experience ends here ..................... */}




{/* .........................projects starts here ..............................*/}


<section id="Projects">
  <div className="row">
    <div className="col col-pp">
    <a href="#Projects" className="arrow"><FaAngleDoubleDown className="angle"/></a>
      <p className="heading-p">Browse My Reacent</p>
      <h1 className="heading">Projects</h1>
      <div className="container projects-container">
        <div className="project">
            <img src="https://img.freepik.com/premium-photo/cyberpunk-woman-schematic-project-engineering-style_739548-785.jpg?size=626&ext=jpg&ga=GA1.2.597781842.1685241639&semt=sph" className="proj-img"/>
            <h3 className="pj">Project 1</h3>
            <div className="pro-btn">
              <a href="" className="btn p-btn border-dark">Github</a>
              <a href="" className="btn border-dark">Live Demo</a>
            </div>
        </div>

        <div className="project">
            <img src="https://img.freepik.com/premium-photo/cyberpunk-woman-schematic-project-engineering-style_739548-785.jpg?size=626&ext=jpg&ga=GA1.2.597781842.1685241639&semt=sph" className="proj-img"/>
            <h3 className="pj">Project 2</h3>
            <div className="pro-btn">
              <a href="" className="btn p-btn border-dark">Github</a>
              <a href="" className="btn border-dark">Live Demo</a>
            </div>
        </div>

        <div className="project">
            <img src="https://img.freepik.com/premium-photo/cyberpunk-woman-schematic-project-engineering-style_739548-785.jpg?size=626&ext=jpg&ga=GA1.2.597781842.1685241639&semt=sph" className="proj-img"/>
            <h3 className="pj">Project 3</h3>
            <div className="pro-btn">
              <a href="" className="btn p-btn border-dark">Github</a>
              <a href="" className="btn border-dark">Live Demo</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* .......................projects ends here.................................  */}




{/* .........................contact starts here ............................. */}


<section id="Contact">
  <div className="row">
    <div className="col col-p">
    <a href="#Contact" className="arrow"><FaAngleDoubleDown className="angle"/></a>
      <p className="heading-p">Get In Touch</p>
      <h1 className="heading">Contact Me</h1>
      <div className="container contact-container">
      <div href="" className=" email-h">
        <FaEnvelope className="envelop"/>
        <a><h5>Example@email.com</h5></a>
      </div>
      <div href="" className=" link-dh">
        <FaLinkedin className="Linkdh"/>
        <a><h5>Linkedin</h5></a>
      </div>
      </div>
    </div>
  </div>
</section>



{/* .........................ends here ......................................... */}



{/* .......................footer start here.......................................*/}

<footer>

<ul className="all">
  <li><a href="#About">About</a></li>
  <li><a href="#Experiences">Experiences</a></li>
  <li><a href="#Projects">Projects</a></li>
  <li><a href="#Contact">Contact</a></li>
</ul>
<p className="copy">&#169; Copyright Your Quikmax || All Rights Reserved</p>


</footer>

      
      




{/* .............................footer ends here...................................*/}








    </div>
  );
}


export default Header;