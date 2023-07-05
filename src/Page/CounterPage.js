import Button from '../Component/Button'
import useCounter from '../Hook/useCounter';

const CounterPage = ({ initialCount }) => {
    const {count, increment} = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    )
}

export default CounterPage
