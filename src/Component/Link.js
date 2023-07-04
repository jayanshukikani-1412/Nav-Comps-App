import React from 'react'
import classNames from 'classnames';
import useNavigation from '../Hook/useNavigation';

const Link = ({ to, children, className, activeClassName }) => {
    const {navigate, currentPath} = useNavigation();

    const classes = classNames('text-blue-500', className,
    currentPath === to && activeClassName
    )

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    }

    return (
        <a href={to} onClick={handleClick} className={classes}>
            {children}
        </a>
    )
}

export default Link
