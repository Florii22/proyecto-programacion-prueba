import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

export default function ToggleCard() {
  // Estado booleano inicializado en true para controlar la visibilidad como pide la filmina
  const [visible, setVisible] = useState(true);

  return (
    <Box sx={{ border: '1px solid #ccc', p: 3, borderRadius: 2, maxWidth: 300, margin: '20px auto', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Ejercicio 3: Mostrar / Ocultar Tarjeta
      </Typography>

      {/* Botón que invierte el estado booleano usando el operador NOT (!) */}
      {/* BONUS: El label cambia dinámicamente usando un operador ternario */}
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => setVisible(!visible)}
        sx={{ mb: 2 }}
      >
        {visible ? 'Ocultar Tarjeta' : 'Mostrar Tarjeta'}
      </Button>

      {/* Renderizado condicional clásico de React usando el operador lógico && */}
      {visible && (
        <Card sx={{ bgcolor: '#fafafa', boxShadow: 2, textAlign: 'left' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              Datos Ocultables
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Email:</strong> usuario.secreto@correo.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Token:</strong> usr_98321x792
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}