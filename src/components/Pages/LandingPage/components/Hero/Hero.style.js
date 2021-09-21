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

@media only screen and (max-width: 700px) {
  min-height:70vh ;
}
@media only screen and (max-width: 500px) {
  min-height:50vh ;
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
    animation: typing 1s steps(22), blink .5s step-end infinite ;
  }
  & h1 {
    overflow: hidden;
    animation: typing 1s steps(22), blink .5s step-end infinite ;
  }

  .imageArrow{
    fill: red;
  }
  
  @media (max-width: 750px) {
    /* font-size: 5rem; */
    & img{
      display: none;
      
    }
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
    animation: typing 1s steps(22), blink .5s step-end infinite ;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  & h1 {
    width: 0%;
    overflow: hidden;
    animation: typing 1s steps(22), blink .5s step-end infinite;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 750px) {
    /* font-size: 5rem; */
    & img{
      display: none;
      
    }
  }
`

export const HeroSecoundName = styled.div`
  display: flex;
  width: 40%;
  display: flex;
  align-self: flex-end;
  max-height: 100%;
  & img{
    object-fit: contain;
    animation: slide1 1s ease-in-out infinite;
  }
  & h1 {
    width: 0%;
    overflow: hidden;
    animation: typing 1s steps(22), blink .5s step-end infinite;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 750px) {
    /* font-size: 5rem; */
    & img{
      display: none;
      
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
    height: 10.04167vw;
    width: 10.04167vw;
    border: thin solid ${(props)=>props.DarkTheme};
    border-radius: 100px;
    left: 45% ;
    top: 25%;
    font-size: 1rem;
    text-align: center;
    background-color:#FBF8F4;
    box-shadow: 0 0 8px ${(props)=>props.DarkTheme}, inset 0 0 8px $${(props)=>props.DarkTheme};
    animation: pulse 2s linear 1s infinite;
    @media only screen and (max-width: 800px) {
        left:40% ;
        top: 70%;
      }
    & .circle{
      display: flex;
      justify-content: center;
      align-items: center;
      border: thin solid ${(props)=>
      props.LightTheme==="#FBF8F4"?"#482526":"#1F1F1F"};
      color: ${(props)=>
      props.LightTheme==="#FBF8F4"?"#482526":"#1F1F1F"} ;
      height: 10.04167vw;
      width: 10.04167vw;
      font-size: 3.04167vw;
      border-radius: 100px;
      -webkit-animation: spin 4s linear infinite ;
      animation: spin 4s linear infinite alternate;
      animation-delay: 4s;
      &:hover{
        cursor: pointer;
        background-color:#472425 ;
        color: whitesmoke;
      }
    }
  }

  @keyframes pulse {
  0% { box-shadow:0 0 16px #472425, inset 0 0 8px #472425; }
  50% { box-shadow:0 0 24px #472425, inset 0 0 14px #472425; }
  100% { box-shadow:0 0 16px #472425, inset 0 0 8px #472425; }
  }

  & article{
    position: relative;
    align-self: flex-start;
    font-size: 2.04167vw;
    width: 40%;
    padding: 10px;
    border: thin solid ;
    margin-top: 50px;
    @media only screen and (max-width: 700px) {
      
        & p{
          max-height: 400px;
        }
        
      }
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
      animation: typing 1s steps(22), blink .5s step-end infinite;
      animation-delay: 3s;
      animation-fill-mode: forwards;
      white-space: wrap;
    }
  }
  & .logoIMG{
    align-self: flex-start;
    object-fit: contain;
    max-height: 100%;
    
  }

  
`



