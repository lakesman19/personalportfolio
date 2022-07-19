import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container, Row, Col} from "react-bootstrap"
import meter1 from '../images/meter1.svg'
import meter3 from '../images/meter3.svg'
import colorsharp from '../images/color-sharp.png'


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
            <Col>
            <div className="skills-bx">
                <h2>
                    Skills
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in, sit neque minus rem sapiente dolorem praesentium ducimus ipsum qui exercitationem possimus deleniti quod sint, nisi numquam assumenda id illo!</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={meter1} alt="image1" />
                        <h5>Web development</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="image11" />
                        <h5>History</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="image111" />
                        <h5>Web design</h5>
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
      </Container>
      <img src={colorsharp} className='background-image-left' />
    </section>
  )
}
 
export default Skills