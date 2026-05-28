import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export default function Footer({ año = new Date().getFullYear() }) {
  return (
    <Box sx={{ p: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {año} Mi Proyecto
      </Typography>
    </Box>
  );
}

Footer.propTypes = {
  año: PropTypes.number,
};
