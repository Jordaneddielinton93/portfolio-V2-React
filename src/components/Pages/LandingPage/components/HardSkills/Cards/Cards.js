import { useContext } from "react";
import { CardStyle, ContainerStyle } from "./Cards.style";
import { PageWrapper } from "../../../../../App/App";

const CardContainers = ({title,img}) => {
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
      </CardStyle>
    </ContainerStyle>
   );
}
 
export default CardContainers;