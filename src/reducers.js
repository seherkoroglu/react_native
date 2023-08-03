import { CHOOSE, GO_BACK, 
    CONTINUE, SET_NAME, SET_SELECTED_AGE, 
    SET_SELECTED_OPTİON } from "./actionTypes";

const initialState = {
    selectedOption: null,
    name: " ",
    continuePressed: false,
    selectedAge: " ",
    selectedOption: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHOOSE':
        return {
          ...state,
          selectedOption: action.payload,
        };
      case 'CONTINUE':
        return {
            ...state,
            continuePressed: true,
        };
      case 'GO_BACK':
        return {
          ...state,
          currentIndex: state.currentIndex - 1,
        };
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload,
            };

        case 'SET_SELECTED_AGE':
            return {
                 ...state,
                 selectedAge: action.payload,
                };
        case 'SET_SELECTED_OPTİON':
            return {
                ...state,
                selectedOption: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default rootReducer;
  


