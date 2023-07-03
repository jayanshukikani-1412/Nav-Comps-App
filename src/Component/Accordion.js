import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (selectIndex) => {
        if(expandedIndex === selectIndex){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(selectIndex)
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-xl'>
            {isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}
        </span>

        return (
            <div key={item.id}>
                <div
                    className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between'
                    onClick={()=> handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>

                {isExpanded && <div
                    className='border-b p-5'
                >
                    {item.content}
                </div>}
            </div>
        )
    })
    return (
        <div className='border-x border-t rounded m-5'>
            {renderedItems}
        </div>
    )
}

export default Accordion
