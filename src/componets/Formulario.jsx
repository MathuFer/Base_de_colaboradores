import React, { useState } from 'react';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setNuevoColaborador({ ...nuevoColaborador, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(nuevoColaborador).some(value => value === '')) {
      mostrarAlerta('danger', 'Todos los campos son requeridos');
    } else {
      agregarColaborador({ ...nuevoColaborador, id: Date.now().toString() });
      mostrarAlerta('success', 'Colaborador agregado exitosamente');
      setNuevoColaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
      });
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input placeholder='Nombre del colaborador' type="text" id="nombre" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} className="form-control" required />
          <br />
          <input placeholder='Email del colaborador' type="text" id="correo" name="correo" value={nuevoColaborador.correo} onChange={handleChange} className="form-control" required />
          <br />
          <input placeholder='Edad del colaborador' type="text" id="edad" name="edad" value={nuevoColaborador.edad} onChange={handleChange} className="form-control" required />
          <br />
          <input placeholder='Cargo del colaborador' type="text" id="cargo" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} className="form-control" required />
          <br />
          <input placeholder='Télefono del colaborador' type="text" id="telefono" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-outline-primary">Agregar</button>
      </form>
      <br />
    </div>
  );
};

export default Formulario;
