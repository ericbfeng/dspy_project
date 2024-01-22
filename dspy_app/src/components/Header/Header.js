import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



export default function Header() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        m: 1,
      },
    }}
  >
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>Create New Pipelines</Button>
      <Button>My Pipelines</Button>
      <Button>Help</Button>
    </ButtonGroup>
  </Box>
  );
}

