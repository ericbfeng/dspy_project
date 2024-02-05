import React, { useState } from 'react';
import { TextField, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

export default function Results() {
  // State to store user input
  const [userQuery, setUserQuery] = useState('');
  const [serverResponse, setServerResponse] = useState('');
  const [parsedRationale, setParsedRationale] = useState('');
  const [parsedAnswer, setParsedAnswer] = useState(''); // Corrected typo in state name
  const [isRequesting, setIsRequesting] = useState(false); // State to manage button disabled status and text

  const handleInputChange = (event) => {
    setUserQuery(event.target.value);
  };

  const handleSendQuery = async () => {
    setIsRequesting(true); // Disable button and change text
    try {
      console.log('Sending query to server:', userQuery);
      const response = await fetch('http://localhost:5000/dspy_backend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userQuery }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Server response:', result);
        setParsedRationale(result.rationale);
        setParsedAnswer(result.answer);
        setServerResponse(result.raw);
      } else {
        console.error('Server responded with an error:', response.status);
        setServerResponse('Server responded with an error.');
      }
    } catch (error) {
      console.error('Error sending query:', error);
    } finally {
      setIsRequesting(false); // Re-enable button after request is completed
    }
  };


  return (
    <>
      <TextField
        label="Type a query for your fine-tuned model"
        multiline
        maxRows={4}
        fullWidth
        value={userQuery} // Bind the TextField value to userQuery state
        onChange={handleInputChange} // Update state on input change
      /><br />
      <Button 
        variant="contained" 
        sx={{ margin: "20px" }} 
        onClick={handleSendQuery}
        disabled={isRequesting} // Disable button based on isRequesting state
      >
        {isRequesting ? 'Requesting...' : 'Send query'}
      </Button>



      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>View Answer:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          <Typography>
            Reasoning: Let's think step by step in order to {parsedRationale || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
          </Typography>
          <br />
          <Typography>
            Answer: {parsedAnswer|| "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>View full request</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Typography>
            {serverResponse || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
          </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}