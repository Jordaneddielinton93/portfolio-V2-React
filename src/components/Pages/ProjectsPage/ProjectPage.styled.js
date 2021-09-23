import styled from "styled-components";

export const ProjectPageStyled = styled.div`
width: 100%;
margin: 60px auto;
display: flex;
flex-direction: column;
color: ${(props)=>props.DarkTheme};
  & .main-Title{
    font-size: 15vw;
    letter-spacing: 15px;
    width:90%;
    border-bottom: thick dotted ${(props)=>props.DarkTheme};
    margin-bottom: 80px;
    align-self: center;
  }

  & .main-container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 150vh;
    width: 100%;

    & .main-container-top, .main-container-bottom{
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-bottom: 80px;
    }

    @media only screen and (max-width: 850px) {

      .main-container-top{
        height: 100%;
        align-items: center;
        flex-direction: column;
      }

      .main-container-bottom{
        display: none;
      }
    }
    
  }
`