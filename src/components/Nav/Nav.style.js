import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 50px;
  text-align: right;
  font-size: 1.55167vw;
  


  & .nav-list{
    margin-top: 40px;
    line-height: 1.2em;
    cursor: pointer;
    & button{
      font-weight: 300;
      width: 100%;
      font-size: 1.04167vw;
      background: none;
      border: none;
      cursor: pointer;
    }
    & .light-theme{
      opacity: 0.6;
    }
  }
`