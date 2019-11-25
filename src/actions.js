import {COUNTER_ADD, COUNTER_SUB, COUNTER_CHANGE_NUMBER_SUB} from './const.js'


export const counterAdd = (number) => {
    return {
        type: COUNTER_ADD,
        payload: number, 
    }
}

export const counterSub = (number) => {
    return {
        type: COUNTER_SUB,
        payload: number, 
    }
}

export const counterChangeNumberSubAddActionCreator = (number) => {
    return {
        type: COUNTER_CHANGE_NUMBER_SUB,
        payload: number, 
    }
}


