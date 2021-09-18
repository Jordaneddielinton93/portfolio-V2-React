import { useReducer } from "react/cjs/react.development";
import { HardSkillStyle } from "./HardSkills.style";
import { Cards } from "../FlipCards/Cards";

import ReactCardFlip from 'react-card-flip';

import { CardsBack } from "../FlipCards/CardsBack";
import { MdDirectionsBike } from 'react-icons/md';
import { GoTools } from 'react-icons/go';
import { FiTool } from 'react-icons/fi';
import { FaToolbox } from "react-icons/fa";



const HardSkills = () => {

  function reduce(state,action){
    switch (action.type) {
      case "JavaScript":
        return{...state,cardflipped1:!state.cardflipped1}
      case "React":
        return{...state,cardflipped2:!state.cardflipped2}
      case "Sass/StyledComponents":
        return{...state,cardflipped3:!state.cardflipped3}
      case "Firebase":
        return{...state,cardflipped4:!state.cardflipped4}
      default:
        break;
    }
  }

  let [state,dispatch] = useReducer(reduce,{
    cardflipped1:false,
    cardflipped2:false,
    cardflipped3:false,
    cardflipped4:false,

  })



  return ( 
    <HardSkillStyle>

    <ReactCardFlip behavior="click"
       isFlipped={state.cardflipped1}
       flipDirection="vertical"
        >
        <Cards
          icon={<FiTool/>}
          skill={"JavaScript"}
          moreinfo={"find out more"}
          dispatch={dispatch}
        />
        <CardsBack 
          skill={"JavaScript"}
          moreinfo={"find out more"}
          Description={"i like javascript"}
          dispatch={dispatch}
          linkToService={""}
          />
      </ReactCardFlip>



      <ReactCardFlip behavior="click"
       isFlipped={state.cardflipped2}
       flipDirection="vertical"
       >
        <Cards
          icon={<GoTools/>}
          skill={"React"}
          moreinfo={"find out more"}
          dispatch={dispatch}/>

        <CardsBack 
          skill={"React"}
          moreinfo={"find out more"}
          dispatch={dispatch}
          Description={"i like react"}
          linkToService={"/StandardService"}
          />
          
      </ReactCardFlip>



      <ReactCardFlip behavior="click"
        flipDirection="vertical"
        isFlipped={state.cardflipped3}
      >
        <Cards
          icon={<FaToolbox/>}
          skill={"Sass/StyledComponents"}
          moreinfo={"find out more"}
          dispatch={dispatch}
        />
        <CardsBack
          skill={"Sass/StyledComponents"}
          moreinfo={"find out more"}
          dispatch={dispatch}
          Description={"i like styled components"}
          linkToService={"/AdvancedService"}
          />
      </ReactCardFlip>



      <ReactCardFlip behavior="click"
      flipDirection="vertical"
       isFlipped={state.cardflipped4}
       >
        <Cards
          icon={<MdDirectionsBike className=""/>}
          skill={"Firebase"}
          moreinfo={"find out more"}
          dispatch={dispatch}
        />
        <CardsBack
          skill={"Firebase"}
          moreinfo={"find out more"}
          dispatch={dispatch}
          Description={"i like firebase"}
          linkToService={"/FullService"}
          />
      </ReactCardFlip>


    </HardSkillStyle>
   );
}
 
export default HardSkills;