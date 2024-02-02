
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Link, Box} from '@mui/material';

import * as React from 'react'; 



export default function PipelineSelector({ options, onAddNew, onChange })  { 

    const [val, setVal] = React.useState("");

    const handleChange = (event) => {
      setVal(event.target.value);
      onChange(event.target.value);
    };

    return(
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{val}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={val}
            label="Val"
            onChange={handleChange}
          >
           {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
            ))}

            <Box textAlign="center" mt={1}>
                <Link href="#" onClick={onAddNew} color="primary">
                    Add New
                </Link>
            </Box>
          </Select>
        </FormControl>
              
    )
}