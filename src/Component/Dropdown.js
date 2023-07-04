import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef();

    useEffect(()=>{
        const handler = (event) => {
            if(!dropDownRef.current){
                return;
            }
            
            if(!dropDownRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click',handler,true);

        const cleanup = () => {
            document.removeEventListener('click',handler);
        }
        return cleanup;
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return (
            <div
                className='hover:bg-sky-100 rounded cursor-pointer p-1'
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        )
    })


    return (
        <div ref={dropDownRef} className='w-48 relative'>
            <Panel
                className='flex justify-between items-center cursor-pointer'
                onClick={handleClick}>
                {value?.label || "Select...."}
                <GoChevronDown/>
            </Panel>

            {
                isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>
            }
        </div>
    )
}

export default Dropdown
