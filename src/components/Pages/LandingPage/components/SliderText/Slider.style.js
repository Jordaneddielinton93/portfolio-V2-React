import styled from "styled-components";

export const SliderStyle = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 12.7vw;
  margin: 170px 0;
`

export const SliderWords = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  font-size:5vw ;
  position: absolute;
  animation: offsetleft 7s linear infinite;
  @keyframes offsetleft {
    0% { left:0 }
    100% { left:-1000px }
  }
  .arrow-word_wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33vw;
    margin-right: 10px;
    justify-content: flex-start;
    text-align: left;
    & #imageArrowContainer{
      width:88% ;
      align-self: flex-start;
      & #imageArrow{
        fill: ${(props)=>props.DarkTheme};
      }
    }
    & h1{
      margin: 0;
      align-self: flex-start;
      color: ${(props)=>props.DarkTheme};
    }
    

  }

  
`