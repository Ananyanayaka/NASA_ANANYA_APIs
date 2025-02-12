import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ImageCard = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
