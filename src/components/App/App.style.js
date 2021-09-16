import styled from "styled-components";

export const AppStyled = styled.div`
  *{
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 200;
    padding: 0%;
    margin: 0%;
    text-decoration: none;
    list-style: none;
  }
  position: relative;
  width:100vw;
  height: 100vh;
  background-color: ${(props)=>props.colourNaked};
  overflow-y: scroll;
  


`

export const BrownColor = "#472425"