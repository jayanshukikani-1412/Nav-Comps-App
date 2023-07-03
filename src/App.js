import React, { useState } from 'react'
import Dropdown from './Component/Dropdown';

const App = () => {

    const [selection, setSelection] = useState(null);
    const handleSelection = (option) => {
        setSelection(option)
    }

    const options = [
        { label:'Red', value:'red'},
        { label:'Green', value:'green'},
        { label:'Blue', value:'blue'}
    ]

    return (
        <div>
            <Dropdown options={options} onSelect={handleSelection} selection={selection}/>
        </div>
    )
}

export default App;