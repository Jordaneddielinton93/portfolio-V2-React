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
    animation: hithere 1s ease infinite;
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
    & #cloud2,#cloud3,#box1sass{
    animation: wiggle 1s ease infinite;

    }
    & #Vector_22,#box2sass{
    animation: wiggle 1.1s ease-in-out infinite;

    }
  }

  & .cardTitle{
    height: 10%;
    width: 100%;
    text-align: center;
    border-bottom: thin solid #472425;
  }
  & .cardImg{
    height: 90%;
    display: flex;
    align-items: center;
    & #CSS{
      min-height: 100%;
    }
  }
`
