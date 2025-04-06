import React from "react";
import { useState } from "react";
import { Typography, Button, Stack, Box, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Add() {
    const [form, setForm] = useState({tname: "", duration: "",  apps: "", priority: "", deadline: ""})
    const navigate = useNavigate();

    const setData = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        // gotta write
        navigate("/quests")
    }

    const goBack = (e) => {
        navigate("/")
        console.log("Go back clicked"); // Debugging

    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center' position='fixed' top={0} left={0} width="100vw" height="100vh" sx={{zIndex: 1300}}>
            <Box spacing={2} padding={2} display='flex' alignSelf='center' justifyContent='center' flexDirection='column' component='form' sx={{ width: "400px", height: "500px", backgroundColor: "rgba(8,8,f,0.5)", borderRadius: "8px"}}>
                <Stack direction='row' padding={2} spacing={5}>
                    <Button variant='text' color='error' fontWeight='bold' onClick={goBack}>
                        Go back
                    </Button>
                    <Typography variant='h4' textAlign='center' fontWeight='bold' fontFamily='monospace'>
                        Adding Task
                    </Typography>
                </Stack>

                <Stack padding={2} spacing={2}>
                    <TextField id="outlined-basic" label="Task Name" name="tname" value={form.tname} onChange={setData} required/>
                    <TextField id="outlined-basic" label="Estimated Task Duration" name="duration" value={form.duration} onChange={setData} required/>
                    <TextField id="outlined-basic" label="Apps Needed" name="apps" value={form.apps} onChange={setData} required/>
                    <TextField id="outlined-basic" label="Task Priority" name="priority" value={form.priority} onChange={setData} required/>
                    <TextField id="outlined-basic" label="Task Deadline" name="deadline" value={form.deadline} onChange={setData} required/>
                </Stack>

                <Button variant='contained' color='primary' onClick={handleSubmit} padding={2}>
                    Add Task!
                </Button>

            </Box>
        </Box>
        
    );
}

export default Add;