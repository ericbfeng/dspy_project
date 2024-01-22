import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import PipelineSelector from './PipelineSelector/PipelineSelector';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function CreatePipelinePage() { 



    const optionsForLLM = ["ChatGPT", "LLama"];
    const optionsForPipeline = ["Alpha", "Beta", "Gamma"];
    const optionsForDataset = ["Internal Memos", "Internal Code", "SoSA"];


    const handleAddNew = (selectorType) => {
        console.log(`Add new for ${selectorType}`);
        // Handle the add new action here, such as opening a modal or navigating
    };



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
                    <PipelineSelector defaultValue="LLM" options={optionsForLLM} onAddNew={handleAddNew} />
                </Grid>
                <Grid item xs={4}>
                    <PipelineSelector defaultValue="Pipeline" options={optionsForPipeline}  onAddNew={handleAddNew}/>
                </Grid>
                <Grid item xs={4}>
                    <PipelineSelector defaultValue="Dataset" options={optionsForDataset} onAddNew={handleAddNew} />
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