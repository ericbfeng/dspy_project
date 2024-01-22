import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import PipelineSelector from './PipelineSelector/PipelineSelector';
import Button from '@mui/material/Button';


export default function CreatePipelinePage() { 



    const optionsForLLM = ["ChatGPT", "LLama"];
    const optionsForPipeline = ["Alpha", "Beta", "Gamma"];
    const optionsForDataset = ["Internal Memos", "Internal Code", "SoSA"];

    return(


            <>

            <Box
                component="section"
                sx={{
                    width: '66.66%', // Sets the width to two-thirds of the screen
                    margin: 'auto', // Centers the box horizontally
                    p: 3, // Padding inside the box
                    border: '1px solid grey', // Solid border
                    borderRadius: 0, // Sharp edges
                    marginTop: '20px' // Adds margin at the top
                }}
            >
             <Grid container spacing={2}>
                <Grid item xs={4}>
                    <PipelineSelector defaultValue="LLM" options={optionsForLLM} />
                </Grid>
                <Grid item xs={4}>
                    <PipelineSelector defaultValue="Pipeline" options={optionsForPipeline} />
                </Grid>
                <Grid item xs={4}>
                    <PipelineSelector defaultValue="Dataset" options={optionsForDataset} />
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
                    >
                        Compile Pipeline
                    </Button>
                </Grid>
            </Grid>

            </>
            
        
    );
}