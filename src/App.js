import React, { useState } from 'react';
import './App.css';
import MoodQuestion from './components/MoodQuestion';

const App = () => {
  const [moodResponses, setMoodResponses] = useState([3]); // Initialize with default response

  const handleAddResponse = (response) => {
    // Update moodResponses state with new response
    setMoodResponses([...moodResponses, response]);
  };

  const calculateAverageMood = () => {
    if (moodResponses.length === 0) return 0;
    const sum = moodResponses.reduce((acc, curr) => acc + curr, 0);
    return (sum / moodResponses.length).toFixed(2);
  };

  return (
    <div className="app">
      <h1>Mood and Mental Health App</h1>
      <p>Answer the following questions on a scale of 1 to 5:</p>
      <MoodQuestion question="How are you feeling today?" onAddResponse={handleAddResponse} />
      <MoodQuestion question="Rate your stress level." onAddResponse={handleAddResponse} />
      <MoodQuestion question="How would you rate your sleep quality?" onAddResponse={handleAddResponse} />
      <div className="average-mood">
        <p>Average Mood: {calculateAverageMood()}</p>
      </div>
    </div>
  );
};

export default App;
