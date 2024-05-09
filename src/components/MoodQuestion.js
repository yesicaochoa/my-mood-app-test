import React, { useState, useEffect } from 'react';

const MoodQuestion = ({ question, onAddResponse }) => {
  const [response, setResponse] = useState(3); // Default response of 3

  useEffect(() => {
    // Call onAddResponse with the initial response value (3)
    onAddResponse(3);
  }, [onAddResponse]); // Only run this effect once after initial render

  const handleResponseChange = (e) => {
    const value = parseInt(e.target.value);
    setResponse(value);
    onAddResponse(value);
  };

  return (
    <div className="mood-question">
      <p>{question}</p>
      <input
        type="number"
        min="1"
        max="5"
        value={response}
        onChange={handleResponseChange}
      />
    </div>
  );
};

export default MoodQuestion;
