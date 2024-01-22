import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Results() {
    return (<>
        <TextField
            label="Type a query for your fine-tuned model"
            multiline
            maxRows={4}
            fullWidth
        /><br />
        <Button variant="contained" sx={{ margin: "20px" }}>Send query</Button>
        <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>View full request</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>)
}