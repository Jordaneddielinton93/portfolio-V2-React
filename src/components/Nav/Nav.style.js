import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 25px;
  text-align: right;
  font-size: 1.90000vw;
  color: ${(props)=>props.DarkTheme};
  z-index: 15;
  & a{
  color: ${(props)=>props.DarkTheme};
  }
  & .nav-list{
    margin-top: 40px;
    line-height: 1.3em;
    cursor: pointer;
    & li{
    background: ${(props)=>props.LightTheme};

    }
    & button{
      font-weight: 300;
      width: 100%;
      font-size: 1.60000vw;
      background: none;
      border: none;
      cursor: pointer;
      &:hover{
        border-bottom: thick solid ${(props)=>props.DarkTheme};
      }
      @media only screen and (max-width: 700px) {
        font-size: 1rem;
      }
    }
    & .dark-theme{
      color: ${(props)=>props.DarkTheme};
      
    }

    & .light-theme{
      opacity: 0.6;
      color: ${(props)=>props.DarkTheme};
    }
  }
  @media only screen and (max-width: 700px) {
    font-size: 1.2rem;
    top:70px;
  }
`