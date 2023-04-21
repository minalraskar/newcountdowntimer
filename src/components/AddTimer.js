import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Input } from '@mui/material';
import Typography from '@mui/material/Typography';
import { lightBlue } from "@mui/material/colors";

function AddTimer({ addTimer }) {
  const [seconds, setSeconds] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTimer(parseInt(seconds));
    setSeconds("");
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
    <div className="new-timer-form">
      <Card sx={{
       maxWidth: 250
      }}>
        <h2 style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>New Timer</h2>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>

              <label htmlFor="seconds-input">Seconds:</label>
              <Input
                type="number"
                id="seconds-input"
                value={seconds}
                onChange={(event) => setSeconds(event.target.value)}
              />
            </Typography>
            <Typography variant="h5" component="div" sx={{ display: "flex", alignContent: "center", justifyContent: "center"}}>
              <Button variant="contained" color="primary" type="submit" >Add Timer</Button>
            </Typography>

          </CardContent>
        </form>

      </Card>

    </div>

  );
}

export default AddTimer;
