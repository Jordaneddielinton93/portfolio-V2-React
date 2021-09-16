export const ACTIONS={
  CHANGE_COLOUR:"CHANGE_COLOUR"
}


export const initstialState = {
  colourNaked:"#FBF8F4",
  colourBrown:"#472425"
}

export function reducer(state,action){
  switch (action.type) {
    case ACTIONS.CHANGE_COLOUR:
        if(action.payload === "DarkTheme"){
          return{
            ...state,
            colourNaked:"#1F1F1F",
            colourBrown:"#FBF8F4"
          }
        }else{
          return{
            ...state,
            colourNaked:"#FBF8F4",
            colourBrown:"#472425"
          }
        }
      
  
    default:
      return{...state}
  }
}