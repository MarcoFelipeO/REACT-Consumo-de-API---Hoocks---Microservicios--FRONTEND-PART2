import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        
        <br/>
        <h1 className='text-center'>Bienvenidos a mi Projecto en Sprinboot Api Rest</h1>
        <Link to='/clientes' className='btn btn-danger'>Ir a nuestro Crud de Clientes</Link>
        &nbsp;&nbsp;<Link  to='/login' className='btn btn-success'>Ir al Login </Link>
        
        
      
    </div>
  )
}

export default Index