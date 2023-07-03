import React, { useState } from 'react'

const Dropdown = ({ options, onSelect, selection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (selectOption) => {
        setIsOpen(false);
        onSelect(selectOption);
    }

    const renderedOptions = options.map((option) => {
        return (
            <div
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        )
    })

    let content = "Select...";
    if(selection){
        content = selection.label;
    }


    return (
        <div>
            <div
                onClick={handleClick}
            >
                {content}
            </div>

            {
                isOpen && <div>{renderedOptions}</div>
            }
        </div>
    )
}

export default Dropdown
