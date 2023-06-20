import React from 'react';
import { Link } from 'react-router-dom';

const ButtonComponent = ({ label, linkTo, callback, backgroundColor, }) => {
  if (!!linkTo) {
    return (
      <Link to={linkTo}>
        <Button label={label} callback={callback} backgroundColor={backgroundColor}/>
      </Link>
    );
  } else return <Button label={label} callback={callback} backgroundColor={backgroundColor}/>;
};

const Button = ({ label, callback, backgroundColor = '#0D6EFD'}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        border: 'none',
        color: '#fff',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      }}

      onClick={callback}
    >
      {label}
    </button>
  );
};
export default ButtonComponent;
