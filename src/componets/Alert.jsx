import React from 'react';

const Alert = ({ tipo, mensaje }) => {
  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
