import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Chip } from '@mui/material';

export default function UserCard({ nombre, rol, activo = true }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rol: {rol}
        </Typography>
        <Chip 
          label={activo ? "Activo" : "Inactivo"} 
          color={activo ? "success" : "default"} 
        />
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  activo: PropTypes.bool,
};