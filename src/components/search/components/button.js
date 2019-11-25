import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <button name='clickme' onClick={onClick}>Search</button>
    )
};

Button.defaultProps = {}
Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;