import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import {Button, Navbar,Container,Nav,Col,Row} from 'react-bootstrap';
import bg from './img/bg.png';
//import 작명 from './data.js';
//import {a,b} from './data.js';
import data from './data.js';

import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'




function App() {




  let [shoes] = useState(data)
  let navigate = useNavigate();
  
  console.log(shoes);
  console.log(shoes[0])
  console.log(shoes[0].id,shoes[0].price)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="App">




       {/* <img src={process.env.PUBLIC_URL + 'shoes0.jpg'} /> */}
   <Navbar bg="light" variant="light" className="p-3">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/"className="p-3" style={{ textDecoration: 'none' }}>홈</Link>    
            <Link to="/detail" className="p-3" style={{ textDecoration: 'none' }}>상세페이지</Link>
            <Nav.Link href="#features" className="p-3" >Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* css말고도 img 경로 집어넣어서 html상에서도 해결 가능  */}
      <div className="main-bg" style={{backgroundImage : 'url(' + bg + ')'}}></div>

      {/* path 뒤에 아무것도 안쓰면 메인페이지임 */}

      {/* <Link to="/">홈</Link>

      <Link to="/detail">상세페이지</Link>
 */}


      <Routes>
        <Route path="/" element={
          <div>
           <Container>
              <Row>
              {
                shoes.map(function(e,i){
                  return <Card id={e.id} title={e.title} price = {e.price}/>
              })
              }
              </Row>
            </Container>
          </div>
        }/>
        <Route path="/detail" element={<Detail/>}/>
          
       
      </Routes>


      {/* <Container>
      <Row>
        {
          shoes.map(function(e,i){
            return <Card id={e.id} title={e.title} price = {e.price}/>
         })
        }
      </Row>
    </Container>
 */}


        <Button variant="primary">Primary</Button>

        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


function Card(props){


  return (
    <Col>
          <img src={process.env.PUBLIC_URL+ 'shoes0.jpg'} width="80%"/>
          <img src={process.env.PUBLIC_URL+ 'shoes'+props.id+'.jpg'} width="80%"/>
          <h4> 설명 :{props.id} {props.title}</h4>
          <p> 가격 : {props.price}</p>
    </Col>
  )


}








export default App;
