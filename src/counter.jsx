import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { counterAdd, 
         counterSub,
} from './actions';
import {COUNTER_ADD} from './const'


const Counter = () => {
    const store = useSelector(store => store);
    const numeroMenos = useSelector(store => store.numberSub)

    const dispatch = useDispatch();

    const handlerAdd = () => {
        dispatch({
            type: COUNTER_ADD,
            payload: 1,
        });
    };

    const handlerSub = () => dispatch(counterSub(1));

    return (
        <div>
            {store.count}
            <button onClick = {handlerAdd}>Add</button>
            <button onClick = {handlerSub}>Sub</button>
        </div>
    );
};

export default Counter; 

