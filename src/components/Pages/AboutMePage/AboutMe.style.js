import styled from "styled-components";
import jordIMG from "./images/chaincar.jpg"
export const AboutPageStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props)=>props.DarkTheme};
` 

 


export const ThreeColumsIntro = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;

  & .left-rightcolumns{
    max-height: 80%;
  }

  & .aboutColums{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 31%;
    height: 100%;

    & .aboutColums_boxs{
      width: 80%;
      font-size: 1.8vw;
      & h1{
        padding-bottom: 10px;
        font-style: italic;
        opacity: 0.6;
      }
      @media only screen and (min-width: 1400px) {
        font-size: 1.8rem;
      }
    }

    & .aboutColums__MidTopColum{
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 2rem;
    }
    
    & .aboutColums__imgContainer{
      display: flex;
      align-items: center;
      width: 90%;
      height: 50vw;
      max-height: 700px;
      max-width: 400px;
      border-radius: 200px;
      border:ridge 12px black;
      
      background-image: url(${jordIMG});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      opacity: 0.6;
      &:hover{
          opacity: 1;
        }
      & .innerborder{
        width: 100%;
        height: 100%;
        border: 5px solid ${(props)=>props.LightTheme};
        border-radius: 180px;
        &:hover{
          border: 8px solid whitesmoke;
          cursor: pointer;
        }
      }
    }
    & .aboutColums-title{
      font-size: 4rem;
    }
  }

`

export const StyledBio = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-width:800px;
    min-height: 400px;
    border-bottom: ridge thick brown;
    
    & .header_title{
      font-size: 5vw;
    }
    & .header_subTitle{
      font-size: 2vw;
    }
    @media only screen and (min-width: 1400px) {
        & .header_title{
          font-size: 2rem;
        }
        & .header_subTitle{
          font-size: 1.5rem;
        }
    }

`

export const YoutubeArea=styled.div`
  width: 100%;
  height: 800px;
`