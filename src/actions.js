export const choose = (option) => {
  return {
    type: "CHOOSE",
    payload: option,
  };
}

export const continueAction = () => {
    return {
        type: "CONTINUE"
    };
    }

export const goBack = () => {
    return {
        type: "GO_BACK"
    };
    }

 export const setName = (name) => {
    return {
        type: "SET_NAME",
        payload: name,
    };
    }

export const setSelectedAge = (age) => {
    return {
        type: "SET_SELECTED_AGE",
        payload: age,
    };
    }

export const setSelectedOption = (option) => {
    return{
        type: "SET_SELECTED_OPTION",
        payload: option,
    };
    }
       
