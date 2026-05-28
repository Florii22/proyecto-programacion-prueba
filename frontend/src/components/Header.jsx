import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header({ titulo }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          {titulo}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
