import React from 'react';
import PropTypes from 'prop-types';

const Input = ({onChange}) => {
    return (
        <input placeholder='search' onChange={onChange} />
    )
};

Input.defaultProps = {}
Input.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Input;