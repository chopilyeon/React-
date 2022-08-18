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
import axios from 'axios';



function App() {




  let [shoes,shoesState] = useState(data)
  let navigate = useNavigate();
  
  console.log(shoes);
  console.log(shoes[0])
  console.log(shoes[0].id,shoes[0].price)




  return (
    <div className='App'>
      {/* <img src={process.env.PUBLIC_URL + 'shoes0.jpg'} /> */}
      <Navbar bg='light' variant='light' className='p-3'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/' className='p-3' style={{ textDecoration: "none" }}>
              홈
            </Link>
            <Link
              to='/detail'
              className='p-3'
              style={{ textDecoration: "none" }}
            >
              상세페이지
            </Link>
            <Nav.Link href='#features' className='p-3'>
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* css말고도 img 경로 집어넣어서 html상에서도 해결 가능  */}
      <div
        className='main-bg'
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      {/* path 뒤에 아무것도 안쓰면 메인페이지임 */}

      {/* <Link to="/">홈</Link>

      <Link to="/detail">상세페이지</Link>
 */}

      <Routes>
        <Route path='/detail' element={
            <div>
              <Container>
                <Row>
                  {
                  shoes.map(function (e, i) {
                    return <Card id={e.id} title={e.title} price={e.price} />;
                  })
                  }
                </Row>
              </Container>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                 .then((결과)=>{ 
                            //로딩중 UI 띄우기
                              console.log(결과.data) 
                              let copy = [...shoes,...결과.data];
                              shoesState(copy);
                              //로딩중 UI숨기기
                              })
                .catch(()=>{
                              console.log('실패함')
                              //로딩중 UI숨기기
                            })  
               axios.post('/safdfas',{name:'kim'})
               
               //ajax 동시에 2개 요청 다 성공하면 하게 하는것 all 함수 
              //  Promise.all([ axios.get('/url2'),axios.get('/url2')]).then(()=>{
              //  })
              
              //fetch도 가능한데 이건 json 변환이 필요함. axios 쓰면 그런거 필요 없음 
              fetch('https://codingapple1.github.io/shop/data2.json')




               }}>더보기 버튼</button>
            </div>
          }
        />
       
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path='*' element={<div><h4>hihi</h4></div>}/>
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
    </div>
  );
}


function Card(props){
  return (
    <Col>
          {/* <img src={process.env.PUBLIC_URL+ 'shoes0.jpg'} width="80%"/> */}
          <img src={process.env.PUBLIC_URL+ 'shoes'+props.id+'.jpg'} width="80%"/>
          <h4> {props.id}번 item {props.title}</h4>
          <p> {props.price}원</p>
    </Col>
  )


}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}







export default App;
