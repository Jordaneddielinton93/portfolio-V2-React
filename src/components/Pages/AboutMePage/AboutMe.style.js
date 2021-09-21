import styled from "styled-components";
import jordIMG from "./images/chaincar.jpg"
export const AboutPageStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const ThreeColumsIntro = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  & .aboutColums{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 31%;
    height: 100%;
    
    & .aboutColums__imgContainer{
      display: flex;
      align-items: center;
      width: 400px;
      height: 70%;
      border-radius: 200px;
      border:solid 12px black;
      
      background-image: url(${jordIMG});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      & .innerborder{
        width: 100%;
        height: 100%;
        border: 10px solid whitesmoke;
        border-radius: 180px;
      }
    }
  }

`