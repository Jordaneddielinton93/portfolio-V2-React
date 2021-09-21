import { useContext } from "react";
import { CardStyle, ContainerStyle } from "./Cards.style";
import { PageWrapper } from "../../../../../App/App";

const CardContainers = ({title,title2,img}) => {
  let stateObj = useContext(PageWrapper)

  return ( 
    <ContainerStyle>
      <CardStyle 
      DarkTheme={stateObj.state.colourBrown}
      LightTheme={stateObj.state.colourNaked}
    >
        <h1 className="cardTitle">{title}</h1>
        <section className="cardImg">
          {img}
        </section>
        <h1 className="cardTitle2">{title2}</h1>
      </CardStyle>
    </ContainerStyle>
   );
}
 
export default CardContainers;