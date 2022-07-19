import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import contactimg from '../images/contact-img.svg'

const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName: '',
        email:'',
        message: '',
        phone:''
    }

    const [formDetials , setFormDetails] = useState(formInitialDetails)
    const [buttonText , setButtonText] = useState('send')
    const [status , setStatus] = useState({})

    const onFormUpdate =( category, value)=>{
        setFormDetails ({
            ...formDetials,
            [category]:value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetials),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };
  return (
    <section className="contact" id="connect">
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                <img src={contactimg} alt="contactimg" />
                </Col>
                <Col md={6}>
                   <h2>Get In Touch</h2>
                   <form onSubmit={handleSubmit }>
                        <Row>
                           <Col sm={6} className='px-1'>
                            <input type='text' value={formDetials.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                            </Col> 
                           <Col sm={6} className='px-1'>
                           <input type='text' value={formDetials.LastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('LastName', e.target.value)} /></Col> 
                           <Col sm={6} className='px-1'>
                           <input type='email' value={formDetials.email} placeholder='Email' onChange={(e)=> onFormUpdate('Email', e.target.value)} /></Col> 
                           <Col sm={6} className='px-1'>
                           <input type='tel' value={formDetials.phone} placeholder='phone number' onChange={(e)=> onFormUpdate('Phone', e.target.value)} /></Col>
                           <Col>
                           <textarea name="" id="" cols="30" rows="6" value={formDetials.message} placeholder='Message' onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                           <button type='submit'>{buttonText}</button>
                           </Col>
                           {
                            status.message &&
                            <Col>
                            <p className={status.success ===false ? 'danger' : 'success'}>{status.message}</p>
                            </Col>
                           }
                        </Row>
                    </form> 
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact