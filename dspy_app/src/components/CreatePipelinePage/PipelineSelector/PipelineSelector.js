
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import * as React from 'react'; 



export default function PipelineSelector({ defaultValue, options })  { 

    const [val, setVal] = React.useState(defaultValue);

    const handleChange = (event) => {
      setVal(event.target.value);
    };

    return(
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{defaultValue}</InputLabel>
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
          </Select>
        </FormControl>
              
    )
}