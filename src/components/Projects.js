import React from 'react'
import {Container, Row, Col,Nav,Tab} from "react-bootstrap"
import TrackVisibility from 'react-on-screen'
import ProjectCard from '../components/ProjectCard'
import colorsharp2 from '../images/color-sharp2.png'
import projImg1 from "../images/project-img1.jpg";
import projImg2 from "../images/project-img2.jpg";
import projImg3 from "../images/project-img3.jpg";
import projImg4 from "../images/project-img4.jpg";
import projImg5 from "../images/project-img5.jpg";
import projImg6 from "../images/project-img6.jpg";
import projImg7 from "../images/project-img7.jpg";
import projImg8 from "../images/project-img8.jpg";

// import 'animate.css';
const Projects = () => {
    const projects =[
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg8,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
          },
         
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg7,
          }
        ] 

        const projectss = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg6,
            },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg5,
          }
        
    ]
  return (
   <section className="project" id="project">
    <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectss.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorsharp2}></img>
   </section>
  )
}

export default Projects