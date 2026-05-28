import { useState, useEffect } from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

// NUEVOS IMPORTS: Los 3 ejercicios de la Clase 4
import Contador from './components/Contador';
import FormContacto from './components/FormContacto';
import ToggleCard from './components/ToggleCard';

export default function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/hola/')
      .then(r => r.json())
      .then(d => setMsg(d.mensaje));
  }, []);

  return (
    <>
      <Header titulo="Árbol de componentes e Interactividad del TP" />

      <main style={{ padding: '20px', minHeight: '70vh' }}>
        
        <div style={{ margin: '20px 0', padding: '10px', background: '#f0f4f8', borderRadius: '4px' }}>
          <strong>Mensaje del servidor:</strong> {msg || 'Cargando...'}
        </div>

        {/* --- SECCIÓN CLASE 3: COMPONENTES Y PROPS --- */}
        <h2 style={{ marginLeft: '16px' }}>Lista de Usuarios (Clase 3)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '40px' }}>
          <UserCard nombre="Ana Martínez" rol="Administradora" />
          <UserCard nombre="Luis Pérez" rol="Desarrollador" activo={false} />
        </div>

        <hr style={{ border: '0', height: '1px', background: '#ccc', margin: '40px 0' }} />

        {/* --- SECCIÓN CLASE 4: ESTADOS Y EVENTOS --- */}
        <h2 style={{ marginLeft: '16px', marginBottom: '20px' }}>Práctica de Estados en Acción (Clase 4)</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Contador />
          <FormContacto />
          <ToggleCard />
        </div>

      </main>

      <Footer />
    </>
  );
}