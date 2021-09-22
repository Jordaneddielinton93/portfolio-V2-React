import styled from "styled-components";

export let ProjectStyle = styled.main`
   //change this to nothing once phones are done
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
    & .box{
      display: flex;
      flex-direction: column;
      width:33%;
      min-height: 100%;
      justify-content: space-between;
      align-items: center;
  
      & h1,p{
        font-size: 2rem;
        width:277px;
        color:  ${(props)=>props.DarkTheme};
        margin-top: 20px;
        @media only screen and (max-width: 1050px) {
          width: 200px;
          font-size: 1.5rem;
        }
        @media only screen and (max-width: 750px) {
          width: 120px;
          font-size: 1rem;
        }
      }
      & h1{
        margin-top: 70px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        text-align: center;
      }
    }
  
    @media only screen and (max-width: 750px) {
      & .box_3{
        display: none;
        }
        justify-content: space-evenly;
    }
    @media only screen and (max-width: 500px) {
      & .box_2{
        display: none;
      }
    }
         
    

`