import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import PipelineSelector from './PipelineSelector/PipelineSelector';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function CreatePipelinePage() { 



    const optionsForLLM = ["ChatGPT", "LLama"];
    const optionsForPipeline = ["Alpha", "Beta", "Gamma"];
    const optionsForDataset = ["Internal Memos", "Internal Code", "SoSA"];

    const handleAddNew = (selectorType) => {
        console.log(`Add new for ${selectorType}`);
        // Handle the add new action here, such as opening a modal or navigating
    };

    const [selectedOptions, setSelectedOptions] = useState({
        llm: '',
        pipeline: '',
        dataset: '',
      });
    
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
                  label="LLM"
                  options={optionsForLLM}
                  onAddNew={() => handleAddNew('llm')}
                  onChange={(value) => handlePipelineSelectorChange('llm', value)}
                />
              </Grid>
              <Grid item xs={4}>
                <PipelineSelector
                  label="Pipeline"
                  options={optionsForPipeline}
                  onAddNew={() => handleAddNew('pipeline')}
                  onChange={(value) => handlePipelineSelectorChange('pipeline', value)}
                />
              </Grid>
              <Grid item xs={4}>
                <PipelineSelector
                  label="Dataset"
                  options={optionsForDataset}
                  onAddNew={() => handleAddNew('dataset')}
                  onChange={(value) => handlePipelineSelectorChange('dataset', value)}
                />
              </Grid>
            </Grid>
          </Box>
    
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={4}>
              <Link to='/compiling' state={{ ...selectedOptions }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Compile Pipeline
                </Button>
              </Link>
            </Grid>
          </Grid>
        </>
      );
}