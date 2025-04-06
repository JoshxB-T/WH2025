import React, { useContext } from 'react';
import { motion } from "motion/react";
import { useState } from "react";
import { Typography, Box, Button, Stack } from '@mui/material';
import Tasks from './Options';
import { QuestContext } from './QuestManager';
import Animation from './Animated';

function Quests() {    
    const { quests, completedQuests } = useContext(QuestContext); // Access quests and completed quests from context
    const [showCompleted, setShowCompleted] = useState(false); // Toggle completed tasks visibility

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

            {/* Tasks and Completed Tasks Menu Row */}
            <Box 
                display="flex" 
                justifyContent="space-between" 
                alignItems="center" 
                sx={{ width: "80%", paddingLeft: 2, marginTop: 2 }}
            >
                {/* Tasks Menu */}
                <Box>
                    <Tasks />
                </Box>

                {/* Button to Toggle Completed Tasks */}
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{ marginLeft: "auto" }} // Align button to the far right
                    onClick={() => setShowCompleted(!showCompleted)}
                >
                    {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
                </Button>
            </Box>

            {/* Completed Tasks Section */}
            {showCompleted && (
                <Box sx={{ marginTop: 3, width: "80%", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: 2, backdropFilter: "blur(5px)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" }}>
                    <Typography variant="h6" color="#000" fontWeight="bold" marginBottom={2}>
                        Completed Tasks
                    </Typography>
                    {completedQuests.length > 0 ? (
                        <Stack spacing={2}>
                            {completedQuests.map((quest, index) => (
                                <Box
                                    key={index}
                                    padding={2}
                                    border="1px solid rgba(255, 255, 255, 0.3)"
                                    sx={{
                                        backdropFilter: "blur(5px)",
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Typography variant="body1" color="rgba(0, 0, 0, 0.9)">
                                        Task Name: {quest.tname}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    ) : (
                        <Typography variant="body2" color="rgba(0, 0, 0, 0.6)">
                            No completed tasks yet.
                        </Typography>
                    )}
                </Box>
            )}
        </Box>
    );
}

export default Quests;