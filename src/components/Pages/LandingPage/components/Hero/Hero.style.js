import styled from "styled-components";
import { BrownColor } from "../../../../App/App.style";

export const HeroStyle = styled.main`
  min-height:95vh ;
  width:100% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props)=>props.DarkTheme};
  @keyframes slide1 {
  0%,
  100% {transform: translate(0, 0);}
  50% {transform: translate(0, 10px);}
}
@keyframes spin {
  0% { transform: rotate(-60deg); }
  100% { transform: rotate(60deg); }
}

@keyframes typing {
  from {
    width: 0 ;
    opacity:0}
  to { 
    width: 100%; 
    opacity:1 }
}
`

export const HeroSection = styled.section`
  
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 7.04167vw;
  font-weight: 900;
  text-shadow: rgba(0, 0, 0, 0.24) 2px 3px;

  @media (min-width: 1200px) {
    /* width: 1200px; */
  }
`

export const HeroFirstName = styled.div`
  display: flex;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  position: relative;
  
 
  & img{
    position: absolute;
    bottom:-10px;
    width: 100%;
    animation: typing 2s steps(22), blink .5s step-end infinite ;
  }
  & h1 {
    overflow: hidden;
    animation: typing 2s steps(22), blink .5s step-end infinite ;
  }

  .imageArrow{
    fill: red;
  }
  
  @media (min-width: 1200px) {
    /* font-size: 5rem; */
  }
`

export const HeroMiddleName = styled.div`
  display: flex;
  width: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  & img{
    width: 0%;
    overflow: hidden;
    position: absolute;
    bottom:-10px;
    animation: typing 2s steps(22), blink .5s step-end infinite ;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  & h1 {
    width: 0%;
    overflow: hidden;
    animation: typing 2s steps(22), blink .5s step-end infinite;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  @media (min-width: 1200px) {
    /* font-size: 5rem; */
  }
`

export const HeroSecoundName = styled.div`
  display: flex;
  width: 40%;
  display: flex;
  align-self: flex-end;
  & img{
    object-fit: contain;
    animation: slide1 1s ease-in-out infinite;
  }
  & h1 {
    width: 0%;
    overflow: hidden;
    animation: typing 2s steps(22), blink .5s step-end infinite;
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }
  @media (min-width: 1200px) {
    /* font-size: 5rem; */
    & img{
      max-height: 100%;
    

    }
  }
`

export const HeroSection2 = styled.section`
  position: relative;

  height:50% ;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 7.04167vw;

  & .circleContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100px;
    width: 100px;
    border: thin solid ${BrownColor};
    border-radius: 100px;
    left: 45% ;
    top: 25%;
    font-size: 1rem;
    text-align: center;
    background-color:#FBF8F4 ;
    & .circle{
      display: flex;
      justify-content: center;
      align-items: center;
      border: thin solid ${(props)=>
      props.LightTheme==="#FBF8F4"?"#482526":"#1F1F1F"};
      color: ${(props)=>
      props.LightTheme==="#FBF8F4"?"#482526":"#1F1F1F"} ;
      height: 90px;
      width: 90px;
      font-size: 1.5rem;
      border-radius: 100px;
      -webkit-animation: spin 4s linear infinite ;
      animation: spin 4s linear infinite alternate;
      animation-delay: 6s;


    }
  }

  & article{
    position: relative;
    align-self: flex-start;
    font-size: 2.04167vw;
    width: 40%;
    padding: 10px;
    border: thin solid ;
    margin-top: 50px;
    &:after {
      content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 30px solid transparent;
	border-right-color: ${(props)=>props.DarkTheme};
	border-left: 0;
	border-bottom: 0;
	margin-top: -15px;
	margin-left: -30px;
}
    & p{
      border-right: .15em solid ${(props)=>props.DarkTheme};
      max-height: 200px;
      width: 0%;
      opacity: 1;
      overflow: hidden;
    animation: typing 2s steps(22), blink .5s step-end infinite;
    animation-delay: 6s;
    animation-fill-mode: forwards;
    white-space: wrap;
    }
  }
  & .logoIMG{
    align-self: flex-start;
    object-fit: contain;
    max-height: 100%;
    
  }
  
  @media (min-width: 1200px) {
    width: 1100px;
    & article{
      font-size: 2rem;
      
      
    } 
  }
  
`



