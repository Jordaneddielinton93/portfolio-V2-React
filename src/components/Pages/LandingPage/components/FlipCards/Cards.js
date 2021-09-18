import "./Cards.css"
// import firstimage from "../images/Untitled1.jpg";

export const Cards = ({icon,skill,moreinfo,dispatch}) => {
   
    return (

        <div className="cards" 
         onMouseEnter={()=>dispatch({type:skill})}>
             {/* <img src={firstimage} alt="" width="100%"/> */}
            <div className="cards-icon">
                {icon}
            </div>
            <h1>
                {skill}
            </h1>

            
            
        </div>
    )
}
