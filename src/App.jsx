import React, { useState } from 'react';
import { BaseColaboradores } from './assets/js/BaseColaboradores';
import Listado from './componets/Listado';
import Formulario from './componets/Formulario';
import Buscador from './componets/Buscador';
import Alert from './componets/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');
  const [alerta, setAlerta] = useState({ tipo: '', mensaje: '' });

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    setAlerta({ tipo: 'success', mensaje: 'Colaborador eliminado exitosamente' });
  };

  const filtrarColaboradores = (terminoBusqueda) => {
    setFiltro(terminoBusqueda);
  };

  const mostrarAlerta = (tipo, mensaje) => {
    setAlerta({ tipo, mensaje });
    setTimeout(() => {
      setAlerta({ tipo: '', mensaje: '' });
    }, 3000);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    Object.values(colaborador).some(value =>
      value.toString().toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>
      <div className='buscador'>
        <Buscador filtrarColaboradores={filtrarColaboradores} /> 
      </div>
      <div className='contenedor'>
        <div className='listado'>
          <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
        </div>
        <div className='formulario'>
          <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
          {alerta.mensaje && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}
        </div>
      </div>
    </div>
  );
}

export default App;
