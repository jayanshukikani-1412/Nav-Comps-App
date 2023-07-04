import React, { useState } from 'react'
import Dropdown from '../Component/Dropdown';

const DropDownPage = () => {

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
        <div className='flex'>
            <Dropdown options={options} onChange={handleSelection} value={selection}/>
        </div>
    )
}

export default DropDownPage;