// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { QuestContext } from "./QuestManager";
// import { Box, Typography, Button } from "@mui/material";

// function AnimatedJourney() {
//   const { quests } = useContext(QuestContext); // Access tasks
//   const [currentStage, setCurrentStage] = useState(0); // Current stage

//   const handleCompleteTask = () => {
//     if (currentStage < quests.length - 1) {
//       setCurrentStage((prevStage) => prevStage + 1); // Move to next stage
//     }
//   };

//   const stages = quests.map((task, index) => ({
//     id: index,
//     task: task.tname || `Task #${index + 1}`,
//   }));

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//       sx={{ backgroundColor: "rgba(0, 0, 50, 0)" }} // Background styling
//     >
//       <Box position="relative" width="600px" height="400px">
//         {/* Render islands dynamically */}
//         {stages.map((stage, index) => (
//           <motion.div
//             key={stage.id}
//             initial={{ opacity: 0, x: index < currentStage ? -200 : 200 }}
//             animate={{
//               opacity: index === currentStage ? 1 : 0,
//               x: index === currentStage ? 0 : index < currentStage ? -200 : 200,
//             }}
//             transition={{ duration: 0.8 }}
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "200px",
//               height: "150px",
//               borderRadius: "50%",
//               backgroundColor: "rgba(161, 18, 205, 0.9)", // Island styling
//               display: index === currentStage ? "flex" : "none",
//               justifyContent: "center",
//               alignItems: "center",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             <Box textAlign="center">
//               <Typography variant="h6" color="#fff">
//                 {stage.task}
//               </Typography>
//             </Box>
//           </motion.div>
//         ))}

//         {/* Render path (if not the last stage) */}
//         {currentStage < stages.length - 1 && (
//           <motion.div
//             initial={{ opacity: 0, scaleX: 0 }}
//             animate={{ opacity: 1, scaleX: 1 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               position: "absolute",
//               top: "55%",
//               left: "calc(50% + 100px)", // Adjust to connect islands
//               width: "100px",
//               height: "10px",
//               backgroundColor: "rgba(255, 255, 255, 0.8)",
//               transformOrigin: "left center",
//             }}
//           />
//         )}
//       </Box>

//       {/* Navigation or task completion button */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleCompleteTask}
//         disabled={currentStage >= stages.length - 1}
//         sx={{ position: "absolute", bottom: "20px" }}
//       >
//         Complete Task
//       </Button>
//     </Box>
//   );
// }

// export default AnimatedJourney;

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { QuestContext } from "./QuestManager";
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // For arrows between tasks

function AnimatedJourney() {

  const { quests, removeQuest } = useContext(QuestContext); // Access tasks and removal function
  const [currentStage, setCurrentStage] = useState(0); // Current stage

  // Handle task completion
  const handleCompleteTask = () => {
    if (currentStage < quests.length) {
      removeQuest(currentStage); // Remove the current task
      setCurrentStage((prevStage) => prevStage + 1); // Move to the next stage
    }
  };

  const visibleStages = quests.slice(currentStage, currentStage + 5); // Show up to 5 tasks at a time

  return (
    <Box
      position="absolute"
      top={0}
      right={0}
      width="40vw" // Restrict to the right side of the window
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end" // Start tasks from the bottom
      alignItems="center"
      sx={{ backgroundColor: "rgba(0, 0, 50, 0)" }}
    >
      {visibleStages.map((task, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "relative",
            marginBottom: index === 0 ? "50px" : "0", // Add margin to the first task
            width: "150px",
            height: "100px",
            borderRadius: "10px",
            backgroundColor: "rgba(34, 139, 34, 0.8)", // Island styling
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            zIndex: 100 - index, // Ensure proper stacking
          }}
        >
          <Typography variant="h6" color="#fff">
            {task.tname || `Task #${currentStage + index + 1}`}
          </Typography>

          {/* Render arrow pointing to the next task */}
          {index < visibleStages.length - 1 && (
            <ArrowUpwardIcon
              sx={{
                position: "absolute",
                top: "-30px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            />
          )}
        </motion.div>
      ))}
    </Box>
  );
}

export default AnimatedJourney;