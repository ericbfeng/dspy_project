import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

export default function Header() {
    const navigate = useNavigate();

    const handleCreatePipelineClick = () => {
       navigate('/create_pipeline');
    };
    const handleMyPipelinesClick = () => {
       navigate('/my_pipelines');
    };
    const handleHelpClick = () => {
       navigate('/help');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyLM
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Button color="inherit" onClick={handleCreatePipelineClick}>Create New Pipelines</Button>
                <Divider orientation="vertical" flexItem />
                <Button color="inherit" onClick={handleMyPipelinesClick}>My Pipelines</Button>
                <Divider orientation="vertical" flexItem />
                <Button color="inherit" onClick={handleHelpClick}>Help</Button>
            </Toolbar>
        </AppBar>
    );
}