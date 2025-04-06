import React, { useState } from 'react';

function Form() {
  const [userInput, setUserInput] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to Django
    const data = { user_input: userInput };

    try {
      // Send the POST request to Django
      const response = await fetch('http://127.0.0.1:8000/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Parse the response from Django
      const result = await response.json();

      if (response.ok) {
        // Handle the success
        console.log(result.message);
      } else {
        // Handle errors (e.g., invalid input)
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Input:
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
