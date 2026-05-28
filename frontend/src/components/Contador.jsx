import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

export default function Contador() {
  // Inicializamos el estado en 0 como pide la consigna
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ border: '1px solid #ccc', p: 3, borderRadius: 2, maxWidth: 300, margin: '20px auto', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Ejercicio 1: Contador
      </Typography>
      
      <Typography variant="h3" sx={{ my: 2 }}>
        {count}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        {/* BONUS: Usamos la prop 'disabled' condicional si count === 0 */}
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -
        </Button>
        
        <Button 
          variant="contained" 
          color="success" 
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Box>
    </Box>
  );
}