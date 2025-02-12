import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, CircularProgress } from '@mui/material';

const EPIC = () => {
  const [epicData, setEpicData] = useState(null);

  useEffect(() => {
    axios.get(`https://nasa-api-media-cbc610ffccef.herokuapp.com/api/epic`)
      .then(response => setEpicData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {epicData ? (
        <div>
          <Typography variant="h5">EPIC Images</Typography>
          <Grid container spacing={2}>
            {epicData.map((image, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <img 
                  src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/png/${image.image}.png`} 
                  alt="EPIC" 
                  width="100%" 
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default EPIC;
