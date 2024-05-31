import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

const ListClientesComponent = () => {
  
    const [cliente,setClientes] = useState([]); //con esto obtenemos los datos desde nuestra BDD, iremos actualizando los datos, por eso
                                                        //comienza en vacio
                                                        //HOCK USESTATE


    useEffect(() => {
        listarClientes()
    },[])     
    
    
    const listarClientes =() => {
        ClienteService.getAllClientes().then(response => { //llama al metodo getAllClientes para que con setEmpleados traiga la lista
            setClientes(response.data);                       //HOCK USEEFFCT
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    
    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then((response) => {
            listarClientes();
        }).catch(error =>{
            console.log(error);
        })
    }

  
    return (
    <div>
        &nbsp;&nbsp;

        <div className='container'>
            <h2 className='text-center'>Lista de empleados</h2>
            <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar nuevo Cliente</Link>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </thead> 
                    <tbody>
                        {
                            cliente.map(
                                cliente =>
                                    <tr key={cliente.id}>
                                      <td>{ cliente.id }</td>
                                      <td>{ cliente.nombre }</td>
                                      <td>{ cliente.apellido }</td>
                                      <td>{ cliente.email }</td>  
                                      <td>
                                        <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                        <button style={{ marginLeft:"10px" }} className='btn btn-danger' onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                                      </td>
                                    </tr>
                            )
                        }
                    </tbody>          
                </table>    
        </div>
        <Link to='/index' className='btn btn-danger'>Ir a nuestro Index</Link>
        

    </div>
  )
}

export default ListClientesComponent
