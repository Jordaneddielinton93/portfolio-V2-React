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
      }
      & h1{
        margin-top: 70px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        text-align: center;
      }
    }
    
    

`