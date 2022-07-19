import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {FaArrowCircleRight} from "react-icons/fa"
import headerimg from "../images/header-img.svg"



const Banner = () => {
    const [LoopNum , setLoopNum] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false)
    const toRotate = ["web Developer", "Web designer", "Historian"]
    const [text , setText] = useState('')
    const [delta , setDelta] =useState(300-Math.random() * 1000)
    const period = 2000

    useEffect(()=>{
       let ticker = setInterval(() => {
        tick()
       }, delta);

       return ()=>{clearInterval(ticker)}
    }, [text])

    const tick =()=>{
        let i = LoopNum % toRotate.length
        let fullText =toRotate[i]
        let updateText = isDeleting ? fullText.substring(0 , text.length-1) : fullText.substring(0 , text.length+1)

        setText(updateText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        
        if(!isDeleting&& updateText===fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting&& updateText===''){
            setIsDeleting(false)
            setLoopNum(LoopNum+1)
            setDelta(500)
        }
    }
    return (
    <section className='banner' id='home'>
        <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className='tagLine'>Welcome To My Portfolio</span>
                <h1> {`Hi I'm Onanuga Yusuf `} <span className='wrap'>{text}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem, blanditiis iure at molestiae magnam numquam facere tenetur saepe sequi ex aperiam culpa neque suscipit. Eius delectus similique nesciunt mollitia.</p>
                <button onClick={()=> console.log('connect')}>Let's Connect<FaArrowCircleRight fontSize={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerimg} alt="Header img"/>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Banner