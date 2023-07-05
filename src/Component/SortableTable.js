import React from 'react'
import Table from './Table'
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import useSortColumn from '../Hook/useSortColumn';

const SortableTable = (props) => {
    const { config, data } = props;

    const {sortBy, sortOrder, handleClick, sortedData} = useSortColumn(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-200' onClick={() => handleClick(column.label)}>
                <div className='flex items-center gap-2'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return (
                <div>
                    <GoTriangleUp />
                    <GoTriangleDown />
                </div>
            );
        }

        if (sortOrder === null) {
            return (
                <div>
                    <GoTriangleUp />
                    <GoTriangleDown />
                </div>
            );
        } else if (sortOrder === 'asc') {
            return (
                <div>
                    <GoTriangleUp />
                </div>
            );
        } else if (sortOrder === 'desc') {
            return (
                <div>
                    <GoTriangleDown />
                </div>
            );
        }
    }

    return (
            <Table {...props} data={sortedData} config={updatedConfig} />
    )
}

export default SortableTable
