import {COUNTER_ADD, COUNTER_SUB,COUNTER_CHANGE_NUMBER_SUB} from './const.js';

const initialState = {
    count: 0,
    numberSub: 0,
};


/**
 * @param {*} prevState
 * @param {*} action
 * @param {string} action.type
 * @param {*} action.payload
 * 
 */


const counterReducer = (prevState = initialState, action) => {
    switch (action.type){
        case COUNTER_ADD:
            return {
                ...prevState,
                count: prevState.count + action.payload
            }
        case COUNTER_SUB:
            return {
                ...prevState,
                count: prevState.count - action.payload
            }
            case COUNTER_CHANGE_NUMBER_SUB:
                    return {
                        ...prevState,
                        numberSub: action.payload
                    }
        default:
            return prevState;
    }
};

export default counterReducer;
