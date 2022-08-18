import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { css } from 'styled-components';


// class Detail2 extends React.Component{
//   // 갈고리를 걸고 싶다! 
//   componentDidMount(){
//     //컴포넌트 mount시 여기 코드 실행됨 

//   }
//   componentDidUpdate(){
//     //컴포넌트 update시 여기 코드 실행됨 

//   }
//   componentWillUnmount(){
//     //컴포넌트 unmount시 여기 코드 실행됨 

//   }


// }






function Detail(props){
    //요새 컴포넌트에 갈고리를 어떤식으로 달까? useEffect!!

    let  [alert,setAlert] = useState(true);
    let  [count,setCount] = useState(0)
    let  [탭, 탭변경 ] = useState(0)
  
  
    

    useEffect(()=>{

      //setTimeout(()=>{setAlert(false)},2000)
      let a = setTimeout(()=>{setAlert(false)},2000)
      //clearTimeout으로 지우기 위해 a 라는 변수를 줘보았다

      //console.log('왜 실행이 되지 없애버렸는데')
      //mount update시 여기 코드 실행이 됨 
      //console.log('안녕');

      //디버깅을 위해 2번이 실행됨 -> 실제로는 1번 실행될것임! 걱정안해도 됨 
      //컴포넌트 업데이트 시켜보자! 
      // for (var i = 0; i<11000;i++){
      //   console.log(1);
      // }
      //console.log(2);
      //return은 useEffect되기 전에 실행이 되는 것임 
      return () =>{
        //기존타이머는 제거해주세요 할 수 있음. 만약에 dependency에 [] 안하고 버튼 계속 누르다보면은 타이머 많이 생길수도 있음 
        //기존데이터 요청은 제거해주세요 도 가능. 
        //console.log(1);
        //console.log('return 찍힐까?')
        //clearTimeout(a);
      }

    })
    //dependency 없으면 mount시에만 실행이 됨 
    //console.log('안녕'); 
    //이렇게 밖으로 빼도 왜 출력이 되지? useEffect는 언제쓸까? -> 간단한 동작 원리 -> 실행 시점이 약간 다름. useEffect는 렌더링이 다 된다음에 실행이 됨! 
    //밑의 코드를 useEffect밖에다가 놓으면은 위에서부터 차례로 읽기때문에 이 for문이 다 돌지 않으면 밑의 것들도 rendering이 안됨 하지만 안에 넣으면? -> 다 렌더링되고 실행됨
    //for (var i = 0; i<11000;i++){
      //console.log(1);
    //}


    //setTimeout사용해보자 

    //setTimeout((()=>{},1000)




    //컴포넌트 변경 코드 
    


    //console.log(props);
    let {id} = useParams();
    let 찾은상품 = props.shoes.find(x => x.id==id);

    

    let Box = styled.div`
      padding : 20px;
      color : grey
    `;

    let YellowBtn = styled.button`
       background : ${props => props.bg};
       color : ${props => props.bg == 'blue' ? 'white' : 'black'};
       padding : 10px;
    `;

    //여기서 커스토마이징 가능함  
    let newBtn = styled.button(YellowBtn);


    return(
        <div className="container">

          {
            alert == true?
            <div className="alert alert-warning">
              2초 이내 구매시 할인
            </div>
            :null

          }



          {/* <Box>
             <YellowBtn bg="blue">버튼</YellowBtn>
             <YellowBtn bg="orange">버튼</YellowBtn>
          </Box>   */}
          <button onClick={()=>{setCount(count+1) }}> 버튼</button>
          
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+id+'.jpg'} width="100%"/>
          </div>
            <div className="col-md-6">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].content}</p>
              <p>{props.shoes[id].price}</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>

          <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
               <Nav.Link onClick  = {() => { 탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
           </Nav.Item>
           <Nav.Item>
               <Nav.Link onClick = {()=> {탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
           <Nav.Item>
               <Nav.Link onClick = {() => {탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
           </Nav.Item>
          </Nav>

          <TabContent 탭={탭}/>



          {/* {
            탭 == 0 ? <div>내용0</div> : null
            // 삼항연산자는 연달아서 사용 못함.
          }
          {
            탭 == 1 ? <div>내용1</div> : null

          } */}

          {/* //일반 조건문 써보자!  */}



{/* 
          <div>내용0</div>
          <div>내용1</div>
          <div>내용2</div>
           */}

 


        </div> 





    )

}
//밖에서 작성하자! 그리고 컴포넌트로 묶어오자! 

// function TabContent(props){
  

//     if(props.탭 == 0) {
//       return(
//       <div className="start end">
//         <div>내용0</div>
//       </div>)
//     }else if(props.탭 == 1){
//       return(
//         <div className="start end">
//           <div>내용1</div>
//         </div>
//         )
//     }else if(props.탭 == 2){
//       return(
//         <div className="start end">
//           <div>내용2</div>
//         </div>)
//       }
      
//     }
        





function TabContent({탭}){
  //뒤에 []는 배열 몇번째 값 뽑을지 정하는 것임. 
    return (

    <div className = "start end">
     {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>    
    
    )
}






export default Detail;