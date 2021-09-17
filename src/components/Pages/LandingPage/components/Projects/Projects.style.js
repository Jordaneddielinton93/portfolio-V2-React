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
      }
      & h1{
        margin-top: 60px;
        
      }
    }
    
    

`