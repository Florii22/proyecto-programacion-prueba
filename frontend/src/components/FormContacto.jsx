import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

export default function FormContacto() {
  // 1. Un solo estado con un objeto para manejar los 3 inputs como pide la filmina
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Estado auxiliar para controlar la visibilidad del Bonus (la alerta de MUI)
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  // Manejador de cambio genérico usando la propiedad 'name' del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Aplicamos INMUTABILIDAD: copiamos el estado anterior y modificamos solo la propiedad que cambió
    setForm({
      ...form,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    // Evitamos el comportamiento nativo de recargar la página (Escudo de las SPAs)
    e.preventDefault();
    
    // Mostramos los datos por consola como exige la consigna
    console.log('Datos del formulario enviados:', form);
    
    // BONUS: Mostramos la alerta de MUI en la pantalla
    setMostrarAlerta(true);
    
    // Opcional: limpiar la alerta después de 4 segundos
    setTimeout(() => setMostrarAlerta(false), 4000);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ border: '1px solid #ccc', p: 3, borderRadius: 2, maxWidth: 400, margin: '20px auto', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h6" textAlign="center">
        Ejercicio 2: Formulario de Contacto
      </Typography>

      {/* BONUS: Renderizado condicional de la Alerta de MUI */}
      {mostrarAlerta && (
        <Alert severity="success">
          ¡Formulario enviado con éxito! Mirá la consola.
        </Alert>
      )}

      {/* Input 1: Nombre */}
      <TextField
        label="Nombre"
        name="nombre"
        variant="outlined"
        fullWidth
        value={form.nombre}
        onChange={handleChange}
        required
      />

      {/* Input 2: Email */}
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        value={form.email}
        onChange={handleChange}
        required
      />

      {/* Input 3: Mensaje */}
      <TextField
        label="Mensaje"
        name="mensaje"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        value={form.mensaje}
        onChange={handleChange}
        required
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </Box>
  );
}