import React, { useState, useEffect } from 'react';
// MoodQuestion.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const MoodQuestion = ({ question, onAddResponse }) => {
    const [response, setResponse] = useState(3);
  
    const handleResponseChange = (event, newValue) => {
      setResponse(newValue);
      onAddResponse(newValue);
    };
  
    return (
      <div className="mood-question">
        <Typography variant="h6">{question}</Typography>
        <Slider
          value={response}
          min={1}
          max={5}
          step={1}
          onChange={handleResponseChange}
          aria-labelledby="response-slider"
        />
        <Typography variant="body2" id="response-slider">
          {response}
        </Typography>
      </div>
    );
  };
  
  export default MoodQuestion;
  
