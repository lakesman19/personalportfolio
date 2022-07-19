import React, {useState, useEffect}from 'react'
import {Container,Nav, Navbar } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Logo from '../images/logo.svg'


const NavBar = () => {
    const [activeLink , setactiveLink] = useState('home')
    const [scrolled , setScrolled] = useState(false)

    useEffect (()=>{
        if (window.scrollY>50){
            setScrolled(true)
        }else {
            setScrolled(false)
        }
        

        window.addEventListener("scroll", onscroll)

        return () => window.removeEventListener("scroll", onscroll)
    }, [])

    const onUpdateActiveLink =(value)=>{
        setactiveLink(value)
    }


      return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home"><img src={Logo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">    
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink==='skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink==='projects'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className="social-icon">
                    <a href=""><FaTwitter className='icons'/></a>
                    <a href=""><FaLinkedinIn className='icons'/></a>
                    <a href=""><FaGithub className='icons'/></a>
                </div>
                <button className="vvd" onClick={() => console.log('yes')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default NavBar