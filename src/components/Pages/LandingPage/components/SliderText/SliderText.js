import { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { PageWrapper } from "../../../../App/App";
import { arrowRightsvg } from "../Images/Arrow";
import { SliderStyle, SliderWords } from "./Slider.style";

const SliderText = ({myworkskill}) => {

  let myWorkArrayOfWords=[]

  for(let i=0; i<30; i++){
    myWorkArrayOfWords.push(`${myworkskill }`)
  }

  let stateObj = useContext(PageWrapper)

 
  return ( 
    <SliderStyle>
      <SliderWords 
      DarkTheme={stateObj.state.colourBrown}
      LightTheme={stateObj.state.colourNaked}>
        {
          myWorkArrayOfWords.map((word)=>{
            return(
              <div className="arrow-word_wrapper">

                
                  {arrowRightsvg}
                

                <h1>{word}</h1>
  
              </div>
            )
          })
        }
         
      </SliderWords>
    </SliderStyle>
   );
}
 
export default SliderText;