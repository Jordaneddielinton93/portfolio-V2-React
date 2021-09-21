import styled from "styled-components";

export const FooterStyle = styled.footer`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height:100px ;
font-size: 3rem;
border-top: 10px ridge brown;
& a{
  color:${(props)=>props.DarkTheme} ;
}
`