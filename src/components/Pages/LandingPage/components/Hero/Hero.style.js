import styled from "styled-components";
import { BrownColor } from "../../../../App/App.style";
export const HeroStyle = styled.main`
  min-height:95vh ;
  width:100% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${BrownColor};
  @keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
    
  }

  50% {
    transform: translate(0, 10px);
  }
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 1;
  }
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
  animation: typing 2s steps(22), blink .5s step-end infinite ;
 
  & img{
    position: absolute;
    bottom:-10px;
    width: 100%;
    color: ${BrownColor};
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
    position: absolute;
    bottom:-10px;
    width: 100%;
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
  }
  @media (min-width: 1200px) {
    /* font-size: 5rem; */
    & img{
      max-height: 100%;
    animation: slide1 1s ease-in-out infinite;

    }
  }
`

export const HeroSection2 = styled.section`
  height:50% ;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 7.04167vw;

  

  & article{
    align-self: flex-start;
    font-size: 2.04167vw;
    width: 40%;
    padding: 10px;
    border: thin solid ;
    margin-top: 50px;
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



