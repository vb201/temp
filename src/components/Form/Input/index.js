import React from 'react';

const Input = ({ type = 'text', name, placeholder, callBack, errors }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                border: errors ? '1px solid red' : '1px solid #ccc',
                outline: 'none',
                width: '100%',
                marginLeft: '1.5rem',
                maxWidth: '500px',
            }}
            onChange={callBack}
        />
    );
};
export default Input;
