import Pipeline from '../Pipeline/Pipeline';
import './compile_style.css';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import Box from '@mui/material/Box';
import AccuracyBlock from './AccuracyBlock';
import Grow from '@mui/material/Grow';
import Results from './Results';
import { useLocation } from 'react-router-dom';

const pollForProgressMock = (function() {
    let progress = 0;
    // Just increases by 10 every time it is called
    return function() {
        progress = Math.min(progress + 10, 100);
        return progress;
    }
})();

const pollForProgress = pollForProgressMock; 


export default function Compiling() {
    const [progress, setProgress] = React.useState(0);
    const { state: options } = useLocation();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(pollForProgress());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const showResults = progress === 100;

    const handlePipelineCompile = async () => {
        try {
          // Send a request to the Flask server with the selected options
          const response = await fetch('http://localhost:5000/pipelineCompile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
          });
    
          // Handle the response as needed
          const result = await response.json();
          console.log('Server response:', result);
        } catch (error) {
          console.error('Error compiling pipeline:', error);
        }
      };

    return (
        <div className="Compiling">
            Your selected pipeline: {options.pipeline}<br />
            <Pipeline pipelineName={options.pipeline} />
            {!showResults && (
                <Box className="progress">
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
            )}
            <Grow in={showResults}>
                <Box className="accuracyBlock">
                    <AccuracyBlock value={21.3} label={"Initial accuracy"} />
                    <img src="./right-arrow.png" alt="arrow" width="50px" />
                    <AccuracyBlock value={86.1} label={"Final accuracy"} />
                </Box>
            </Grow>
            <Grow in={showResults} {...(showResults ? { timeout: 1000 } : {})}>
                <Box>
                    <Results />
                </Box>
            </Grow>
        </div>
    );
}