import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
  return (
    <div>
        <Container>
      <Row className='p-4'>
        <Col >
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20250415/pngtree-calculating-real-estate-value-for-investment-image_17190362.jpg" width={"600px"} height={"450px"} alt="" />
        </Col>
        <Col>
        <h1 style={{marginTop:'50px', textAlign:'center', color:'green'}}>Basic Calculator</h1>
        <br />
        <h5 style={{textAlign:'center'}}>A basic calculator offers numerous advantages, making it an essential tool for everyday tasks and learning. It simplifies arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to perform quick and accurate calculations without manual effort. This is especially helpful in educational settings, where students can focus on understanding mathematical concepts rather than getting bogged down by computation.</h5>
        </Col>
      </Row>
      
    </Container>
  
    </div>
  )
}

export default LandingPage