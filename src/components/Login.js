import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>


<div className='container'>
           <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    
                    <div className='card-body'>
                        <form>
                          <h2 className='text-center'>Login Usuario</h2>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Correo</label>
                                <input type='email' placeholder='Coloque su Correo' name='correo' className='form-control'></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Contraseña</label>
                                <input  placeholder='Coloque su Contraseña' type='password' name='password' className='form-control'></input>
                            </div>

                            
                            <button className='btn btn-success' >Guardar</button>
                            &nbsp;&nbsp;
                            <Link to='/index' className='btn btn-danger'>Cancelar</Link>
                            &nbsp;&nbsp;
                            <Link to='/registro' className='btn btn-info' >No te has registado?</Link>
                     </form>
                    </div>
                </div> 
            </div>
        </div>

      
    </div>
  )
}

export default Login
