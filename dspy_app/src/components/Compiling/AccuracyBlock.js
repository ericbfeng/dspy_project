import React from "react";
import Box from '@mui/material/Box';

export default function AccuracyBlock(props) {
    // Displays the label and the percent given by `props`
    // Colored by whether the percent is good, medium, or bad

    const color = ((percent) => {
        if (percent > 70) {
            return "#197e19";
        } else if (percent > 30) {
            return "yellow";
        } else {
            return "#ec9595";
        }
    })(props.value);

    return (
        <Box className="AccuracyBlock" sx={{ color }}>
            <h1>{props.label}: {props.value}</h1>
        </Box>
    );
}