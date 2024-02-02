import './pipeline.css';
import { Box, Typography } from '@mui/material';
import pipelineData from '../Data/pipelines.json';

export default function Pipeline({ pipelineName }) {
    const contents = pipelineData[pipelineName];
    console.log(contents);
    return (
        <div className="Pipeline">
        <Box sx={{ 
          width: '100%', // Ensures the Box fills the Pipeline container
          height: '100%', // Adjusted to fill the height of the Pipeline container
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <Box sx={{ 
            width: '30%', // Adjusts the width to ensure spaces between the boxes
            height: '80%', // Adjusted to fit within the Pipeline container, considering border and padding if any
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'skyblue', 
            borderRadius: '8px',
          }}>
            <Typography variant="h6">COT System</Typography>
          </Box>
          <Typography variant="h4" sx={{ color: 'black' }}>→</Typography> 
          <Box sx={{ 
            width: '30%', 
            height: '80%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'skyblue', 
            borderRadius: '8px',
          }}>
            <Typography variant="h6">RAG system</Typography>
          </Box>
          <Typography variant="h4" sx={{ color: 'black' }}>→</Typography> 
          <Box sx={{ 
            width: '30%', 
            height: '80%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'skyblue', 
            borderRadius: '8px',
          }}>
            <Typography variant="h6">Bootstrapping</Typography>
          </Box>
        </Box>
      </div>
    );
}