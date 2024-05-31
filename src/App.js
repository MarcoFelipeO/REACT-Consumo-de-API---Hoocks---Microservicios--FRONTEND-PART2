import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';
import Index from './components/Index';
import Login from './components/Login';
import RegistroComponent from './components/RegistroComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/clientes" element={<ListClientesComponent />} />
            <Route path="/add-cliente" element={<AddClienteComponent />} />
            <Route path="/edit-cliente/:id" element={<AddClienteComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<RegistroComponent />} />
            {/* Otras rutas aquí */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
