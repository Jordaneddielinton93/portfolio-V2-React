import "./Cards.css"
import { GrTooltip } from 'react-icons/gr';
// import { Link } from 'react-router-dom';

export const CardsBack = ({skill,moreinfo,dispatch,Description,linkToService}) => {
   
    return (
      
        
        <div className="cardsBack" style={{backgroundColor:"#D6EBDE"}}
        onMouseLeave={()=>dispatch({type:skill})}>
            <div className="cards-icon">
                <GrTooltip/>
            </div>
            <h1 className="cardsBack__Descritption">
                {Description}
            </h1>

            
            {linkToService.length>1?
            <button className="letsExplore-btn" >
            {/* <Link to={linkToService}>
                {moreinfo}
            </Link> */}
            </button>
            :"Scroll down for individual services"}
            
            
            
        </div>
    )
}
