import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Container, CircularProgress } from '@mui/material';
import CarouselComponent from '../components/CarouselComponent';

const MediaLibrary = () => {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    axios.get(`https://nasa-api-media-cbc610ffccef.herokuapp.com/api/nasa-media?query=earth`)
      .then(response => setMediaData(response.data.collection.items))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      {mediaData.length ? (
        <>
          <Typography variant="h5">NASA Media Library</Typography>
          <CarouselComponent mediaData={mediaData} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default MediaLibrary;
