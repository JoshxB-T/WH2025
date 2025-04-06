import React, { useContext, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { QuestContext } from "./QuestManager";
import Loading from './LoadingAnimation'
import { motion } from "framer-motion"; // Don't forget to import motion

function Popup() {
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // Access passed task details
  const { removeQuest } = useContext(QuestContext); // Access removeQuest from context
  const task = location.state?.tempTask || { tname: "Unknown Task", duration: "5 seconds", index: 0 }; // Default values

  useEffect(() => {
    // Convert task duration into milliseconds
    const parseDuration = (duration) => {
      const [value, unit] = duration.split(" ");
      const timeValue = parseInt(value, 10);

      switch (unit.toLowerCase()) {
        case "seconds":
        case "second":
          return timeValue * 1000;
        case "minutes":
        case "minute":
          return timeValue * 60 * 1000;
        default:
          console.warn("Invalid duration unit. Defaulting to 5 seconds.");
          return 5000; // Default to 5 seconds
      }
    };

    const timer = setTimeout(() => {
      removeQuest(task.index); // Automatically remove the task after its duration
      navigate(-1); // Navigate back to the previous page
    }, parseDuration(task.duration));

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [task, navigate, removeQuest]);

  const handleFinishTask = () => {
    removeQuest(task.index); // Manually remove the task when "Finish Task" is clicked
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Box>
      {/* <Loading /> */}
      {/* Animated Background */}
      {/* Content Box */}
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(0, 0, 0, 0.5)" // Semi-transparent background overlay
        zIndex={1500} // Ensure it's layered above the background
      >
        <Box
          width="300px"
          padding="16px"
          bgcolor="rgba(169, 169, 169, 0.9)" // Grey background for the popup
          color="black"
          borderRadius="8px"
          boxShadow="0 4px 10px rgba(0, 0, 0, 0.3)"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h6" gutterBottom>
            Task In Progress
          </Typography>
          <Typography variant="body2" textAlign="center" marginBottom="16px">
            You are working on "{task.tname}". It will auto-complete in{" "}
            {task.duration} or click "Finish Task" to complete it manually.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinishTask}
            sx={{ alignSelf: "center" }}
          >
            Finish Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Popup;
