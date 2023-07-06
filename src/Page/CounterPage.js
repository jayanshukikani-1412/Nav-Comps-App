import Button from '../Component/Button'
import Panel from '../Component/Panel';
// import { useState } from 'react'
import { useReducer } from 'react';
// import useCounter from '../Hook/useCounter';

const INCREMENT_COUNT = 'increment count';
const DECREMENT_COUNT = 'decrement count';
const INPUT_CHANGE_VALUE_TO_ADD = 'input change value to add';
const VALUE_ADD_INTO_COUNT = 'value add into count';

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case INPUT_CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            };
        case VALUE_ADD_INTO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd:0
            }
        default:
            return state;
            // throw new Error('UNEXPECTED ACTION TYPE : ' + action.type)
    }
}

const CounterPage = ({ initialCount }) => {
    // const {count, increment} = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    console.log(state)

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value)
        dispatch({
            type: INPUT_CHANGE_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd)
        // setValueToAdd(0)
        dispatch({
            type: VALUE_ADD_INTO_COUNT
        })
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add a lot !</label>
                <input type="number" value={state.valueToAdd || ""} onChange={handleChange} className='p-1 m-3 bg-gray-50 border border-gray-300' name="" id="" />
                <Button>Add It!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage
