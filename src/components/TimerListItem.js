import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function TimerListItem({ timer, index, deleteTimer }) {
  const { startTime, remainingTime } = timer;
  const remainingSeconds = Math.floor(remainingTime / 1000);

  const handleDeleteClick = () => {
    deleteTimer(index);
  };

  
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography sx={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}} color="text.secondary" gutterBottom>
          <Button   onClick={handleDeleteClick}>X</Button>
          </Typography>
          <Typography variant="h5" component="div">
          <div className="timer-list-item-time">{new Date(startTime).toLocaleString()}</div>
        <div className="timer-list-item-remaining">{remainingSeconds.toString().padStart(2, '0')},{Math.floor(remainingTime % 1000 / 10).toString().padStart(2, '0')}</div>
          </Typography>
          
        </CardContent>

      </Card>

    
    </div>
  );
}

export default TimerListItem;
