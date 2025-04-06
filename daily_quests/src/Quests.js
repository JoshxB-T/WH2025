import React, { useContext } from 'react';
import { motion } from "motion/react";
import { useState } from "react";
import {Typography, Box,} from '@mui/material';
import { useNavigate, Link } from "react-router-dom";
import Tasks from './Options';
import { QuestContext } from './QuestManager';
import Animation from './Animated';

function Quests() {    
    // console.log("questes rendered yay");  

    const { quests } = useContext(QuestContext);
    const count = quests.length;
    const previous = count-1;

    return (
        <Box width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" position='relative'>
            {/* Animated Background */}
            <motion.div
                style={{
                position: "absolute", width: "100%", height: "100%", background: "linear-gradient(0deg, #00BA2D, #B7E6E2, #007185)", zIndex: -1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            />

            {/* Title */}
            <Typography padding={3} variant='h4' justifyContent={'center'} color='#000' fontWeight={'bold'} fontFamily='monospace'>
                Daily Quests
            </Typography>

            {/* Animation */}
            <Box width="80%" height = "60%" display="flex" justifyContent="center" alignItems="center" sx={{ position: "absolute", zIndex: 1, top: "150px", left: "200px", overflow: "hidden"}} >
                <Animation />
            </Box>


            {/* Menu */}
            <Box sx={{alignSelf: "flex-start", paddingLeft: 2}}>
                <Tasks />
            </Box>






           
        </Box>
        
    );
}

export default Quests;