import styled from "styled-components";

export const AboutPageStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`


export const ThreeColumsIntro = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 40px;
  & .aboutColums{
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 100%;
    background-color: black;
    & .aboutColums__imgContainer{
      display: flex;
      align-items: center;
      width: 95%;
      height: 70%;
      border-radius: 190px;
      border:solid thick red;
      margin:auto 0;
      & img{
        width: 100%;
      }
    }
  }

`