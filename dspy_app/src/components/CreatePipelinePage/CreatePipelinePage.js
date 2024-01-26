import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import PipelineSelector from './PipelineSelector/PipelineSelector';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useState,useEffect } from 'react';

export default function CreatePipelinePage() { 



    const optionsForLLM = ["ChatGPT", "LLama"];
    const optionsForPipeline = ["Alpha", "Beta", "Gamma"];
    const optionsForDataset = ["Internal Memos", "Internal Code", "SoSA"];

    const handleAddNew = (selectorType) => {
        console.log(`Add new for ${selectorType}`);
        // Handle the add new action here, such as opening a modal or navigating
    };

    const [selectedOptions, setSelectedOptions] = useState({
        llm: 'LLM',
        pipeline: 'Pipeline',
        dataset: 'Dataset',
      });
    
      const handlePipelineCompile = async () => {
        try {
          // Send a request to the Flask server with the selected options
          const response = await fetch('http://localhost:5000/execute_pipeline', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedOptions),
          });
    
          // Handle the response as needed
          const result = await response.json();
          console.log('Server response:', result);
        } catch (error) {
          console.error('Error compiling pipeline:', error);
        }
      };
    
      const handlePipelineSelectorChange = (category, value) => {
        setSelectedOptions((prevOptions) => ({ ...prevOptions, [category]: value }));
      };

      return (
        <>
          <Box
            component="section"
            sx={{
              width: '66.66%',
              margin: 'auto',
              p: 3,
              border: '1px solid grey',
              borderRadius: 0,
              marginTop: '20px',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <PipelineSelector
                  defaultValue={selectedOptions.llm}
                  options={optionsForLLM}
                  onAddNew={handleAddNew}
                  onChange={(value) => handlePipelineSelectorChange('llm', value)}
                />
              </Grid>
              <Grid item xs={4}>
                <PipelineSelector
                  defaultValue={selectedOptions.pipeline}
                  options={optionsForPipeline}
                  onAddNew={handleAddNew}
                  onChange={(value) => handlePipelineSelectorChange('pipeline', value)}
                />
              </Grid>
              <Grid item xs={4}>
                <PipelineSelector
                  defaultValue={selectedOptions.dataset}
                  options={optionsForDataset}
                  onAddNew={handleAddNew}
                  onChange={(value) => handlePipelineSelectorChange('dataset', value)}
                />
              </Grid>
            </Grid>
          </Box>
    
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handlePipelineCompile}
              >
                Compile Pipeline
              </Button>
            </Grid>
          </Grid>
        </>
      );
}