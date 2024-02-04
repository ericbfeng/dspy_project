import './pipeline.css';
import { Box, Typography } from '@mui/material';
import pipelineData from '../Data/pipelines.json';

export default function Pipeline({ pipelineName }) {
    const { contents } = pipelineData[pipelineName];
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
          {
            contents.map((item, index) => [
                index > 0 && (<Typography key={2 * index} variant="h4" sx={{ color: 'black' }}>→</Typography>),
                (<Box key={2 * index + 1} sx={{ 
                  width: '30%', // Adjusts the width to ensure spaces between the boxes
                  height: '80%', // Adjusted to fit within the Pipeline container, considering border and padding if any
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  backgroundColor: 'skyblue', 
                  borderRadius: '8px',
                }}>
                  <Typography variant="h6">{item}</Typography>
                </Box>)
            ].filter(Boolean))
            .flat()
          }
          </Box>
      </div>
    );
}