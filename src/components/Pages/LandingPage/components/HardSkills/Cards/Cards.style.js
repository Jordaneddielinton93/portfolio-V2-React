import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  #cloud1{
  animation: 5s fade-in-left linear infinite;
  }
  #cloud2,#cloud3{
  animation: 6s fade-in-left  linear infinite;
  }
  #cloud3,#writing2{
  animation: 6s fade-in-left  linear infinite;
  }
  #windowspud,#writing1,#writing3,#squaretext {
  animation: 5s fade-in-right linear infinite;
  }
  @keyframes fade-in-left {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fade-in-right {
    0% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media only screen and (max-width: 950px) {
    width: 50%;
    height: 500px;
  }
  
  
`

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 70%;
  border: #472425 ridge 15px;
  border-radius: 10px;
  background-color:#FBF8F4 ;

  &:hover{
    animation: hithere 1s ease forwards;
    cursor: pointer;
    @keyframes hithere {
      30% { transform: scale(1.2); }
      40%, 60% { transform: rotate(-15deg) scale(1.1); }
      50% { transform: rotate(15deg) scale(1.1); }
      70% { transform: rotate(0deg) scale(1.1); }
      100% { transform: scale(1); }
    }
    @keyframes wiggle {
      30% { transform: scale(1.2); }
      40%, 60% { transform: rotate(25deg) scale(1.1); }
      50% { transform: rotate(-25deg) scale(2.1); }
      70% { transform: rotate(0deg) scale(1.1); }
      100% { transform: scale(1); }
    }
    & #cloud2,#cloud3{
    animation: wiggle 1.1s ease infinite;

    }
    & #writing1,#writing3,#box2sass,#cloud2,#cloud3,.armss{
    animation: hinge 1.1s ease-in-out forwards;

    }

    #Vector_30,#Vector_31,#Vector_32,#Vector_33,#Vector_34,#Vector_35,#Vector_36,#Vector_37,#Vector_38,#Vector_39,#Vector_40,#box1sass,#Vector_22,#arrowjs,#cloud1,#Vector_18,#Vector{
  animation: hinge 2s ease forwards ;
}
@keyframes hinge {
  0% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }  
  20%, 60% { transform: rotate(4deg); transform-origin: top left; animation-timing-function: ease-in-out; }  
  40% { transform: rotate(6deg); transform-origin: top left; animation-timing-function: ease-in-out; } 
  80% { transform: rotate(3deg) translateY(0);  transform-origin: top left; animation-timing-function: ease-in-out; } 
  100% { transform: translateY(190px);  }
}
  }

  & .cardTitle{
    height: 10%;
    width: 100%;
    text-align: center;
    border-bottom: thin solid #472425;
  }
  & .cardTitle2{
    height: 10%;
    width: 100%;
    text-align: center;
    border-top: thin solid #472425;
  }
  & .cardImg{
    height: 90%;
    display: flex;
    align-items: center;
    & #CSS{
      min-height: 100%;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 60%;
  }
  @media only screen and (max-width: 600px) {
    width: 150px;
    height: 60%;
    & .cardTitle,.cardTitle2{
      font-size: 1.5rem;
    }
  }
  
`
