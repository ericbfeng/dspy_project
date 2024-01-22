import Pipeline from '../Pipeline/Pipeline';
import './compile_style.css';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import Box from '@mui/material/Box';

export default function Compiling() {
    const [progress, setProgress] = React.useState(0);
    return (
        <div className="Compiling">
            Your selected pipeline:<br />
            <Pipeline />
            <Box className="progress">
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </div>
    );
}