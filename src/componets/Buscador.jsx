import React from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const handleChange = (e) => {
    filtrarColaboradores(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Busca un colaborador" className="form-control" />
    </div>
  );
};

export default Buscador;
