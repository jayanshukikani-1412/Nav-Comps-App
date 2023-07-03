import React from 'react'
// import PropTypes from 'prop-types' 
import className from 'classnames'

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
    const classes = className(rest.className,'flex items-center px-6 py-1.5 border m-2', {
        'border-blue-600 bg-blue-500 text-white':primary,
        'border-gray-600 bg-gray-500 text-white':secondary,
        'border-green-600 bg-green-500 text-white':success,
        'border-yellow-600 bg-yellow-500 text-white':warning,
        'border-red-600 bg-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-500':outline && primary,
        'text-gray-500':outline && secondary,
        'text-green-500':outline && success,
        'text-yellow-500':outline && warning,
        'text-red-500':outline && danger,
    })

    return (
        <button {...rest} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger
    }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('!!! ONLY ONE OD PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER CAN BE TRUE !!!')
        }
    }
}

export default Button
