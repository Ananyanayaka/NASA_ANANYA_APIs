import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, CircularProgress } from '@mui/material';

const APOD = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios.get(`https://nasa-api-media-cbc610ffccef.herokuapp.com/api/apod`)
      .then(response => setApodData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      {apodData ? (
        <Box>
          <Typography variant="h5">{apodData.title}</Typography>
          <img src={apodData.url} alt={apodData.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
          <Typography>{apodData.explanation}</Typography>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default APOD;
