import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 50px;
  text-align: right;
  font-size: 1.60000vw;
  color: ${(props)=>props.DarkTheme};

  & .nav-list{
    margin-top: 40px;
    line-height: 1.3em;
    cursor: pointer;
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
    }
    & .dark-theme{
      color: ${(props)=>props.DarkTheme};
      
    }

    & .light-theme{
      opacity: 0.6;
      color: ${(props)=>props.DarkTheme};
    }
  }
`