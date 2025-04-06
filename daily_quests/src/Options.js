import React from "react";
import { useState } from "react";
import {Button, Popover, Stack } from "@mui/material";
import Add from './Add'

function Options() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [addForm, setAddForm] = useState(false);

    const handlePopOverClick = (event) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
        }
        //setAddForm(false)
    }

    const handlePopOverClose = () => {
        setAnchorEl(null);
        setAddForm(false)
    }

    const handleAddClick = () => {
        setAddForm(true);
    }

    const handleViewClick = () => {
        // gotta do
    }

    const id = Boolean(anchorEl) ? 'simple-popover' : undefined;

    return (
        <Button aria-describedby={id} variant='contained' color='primary' onClick={handlePopOverClick}>
            Tasks
            <Popover id={id} open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handlePopOverClose} anchorOrigin = {{ vertical: 'bottom', horizontal: 'left' }}>
                { addForm ? ( <Add /> ) : (
                    <Stack direction="column" padding={2} spacing={2}>
                        <Button variant="outlined" onClick={handleAddClick}>
                            Add Task
                        </Button>
                        <Button variant="outlined" onClick={handleViewClick}>
                            View Tasks
                        </Button>
                    </Stack>
                    )
                }
            </Popover>
        </Button>
    );


}

export default Options;