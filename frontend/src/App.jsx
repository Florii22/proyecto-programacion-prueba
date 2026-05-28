import { useState, useEffect } from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

export default function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hola/')
      .then(r => r.json())
      .then(d => setMsg(d.mensaje));
  }, []);

  return (
    <>
      <Header titulo="Primer árbol de componentes del TP" />

      <main style={{ padding: '20px', minHeight: '70vh' }}>
        
        <div style={{ margin: '20px 0', padding: '10px', background: '#f0f4f8', borderRadius: '4px' }}>
          <strong>Mensaje del servidor:</strong> {msg || 'Cargando...'}
        </div>

        <h2 style={{ marginLeft: '16px' }}>Lista de Usuarios</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <UserCard nombre="Ana Martínez" rol="Administradora" />
          <UserCard nombre="Luis Pérez" rol="Desarrollador" activo={false} />
        </div>

      </main>

      <Footer />
    </>
  );
}