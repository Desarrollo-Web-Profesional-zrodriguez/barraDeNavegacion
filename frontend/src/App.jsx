import React from 'react';
import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/secciones/Home';
import About from './componentes/secciones/About';
import Cursos from './componentes/secciones/Cursos';
import Contacto from './componentes/secciones/Contacto';
import Perfil from './componentes/secciones/Perfil';

const App = () => {
    return (
        <div className='overflow-x-hidden'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/perfil" element={<Perfil />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;