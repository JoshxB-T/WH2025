// import React from "react";
// import { useContext } from "react";
// import { QuestContext } from "./QuestManager";
// import { Box, Typography, Stack, TextField } from "@mui/material";

// function ViewTasks() {
//   const { quests } = useContext(QuestContext); // Access quests from context

//   return (
//     <Box padding={4}>
//       <Typography variant="h4" gutterBottom>
//         Task List
//       </Typography>
//       {
//         quests.length > 0 ? (
//             <Stack spacing={3}>
//             {
//                 quests.map( (quest, index) => (
//                     <Box key={index} padding={2} border="1px solid #ccc" borderRadius={2} boxShadow={2} bgcolor="#f9f9f9">
//                     <Stack spacing={2}>
//                         <TextField label="Task Name" value={quest.tname} variant="outlined" disabled />
//                         <TextField label="Duration" value={quest.duration} variant="outlined" disabled />
//                         <TextField label="Apps Needed" value={quest.apps} variant="outlined" disabled />
//                         <TextField label="Priority" value={quest.priority} variant="outlined" disabled />
//                         <TextField label="Deadline" value={quest.deadline} variant="outlined" disabled />
//                     </Stack>
//                     </Box>
//                 ))
//             }
//             </Stack>
//         ) : (
//             <Typography variant="body1" color="text.secondary">
//             No tasks right now 😣 Add a task to get started!
//             </Typography>
//         )
//       }
//     </Box>
//   );
// }

// export default ViewTasks;



import React from "react";
import { useContext } from "react";
import { QuestContext } from "./QuestManager";
import { Box, Typography, Stack, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // "X" button icon
import { useNavigate } from "react-router-dom";

function ViewTasks() {
  const { quests } = useContext(QuestContext); // Access quests from context
  const navigate = useNavigate(); // For navigation

  const handleGoBack = () => {
    navigate("/quests"); // Navigate to the /quests page
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
        zIndex: 1300,
      }}
    >
      <Box
        padding={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "400px", // Fixed width
          height: "600px", // Fixed height
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
          borderRadius: "12px",
          backdropFilter: "blur(10px)", // Frosted glass effect
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", // Subtle shadow
        }}
      >
        {/* Header with X Button */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
            Task List
          </Typography>
          <IconButton onClick={handleGoBack}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>

        {/* Scrollable Task List */}
        <Box
          mt={2}
          width="100%"
          height="500px" // Content fits within fixed height
          overflow="auto" // Enables scrolling
          sx={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "5px", // Narrow scrollbar for aesthetic
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.4)",
              borderRadius: "10px",
            },
          }}
        >
          {quests.length > 0 ? (
            <Stack spacing={2}>
              {quests.map((quest, index) => (
                <Box
                  key={index}
                  padding={2}
                  border="1px solid rgba(255, 255, 255, 0.3)" // Translucent border
                  borderRadius="8px"
                  sx={{
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
                  }}
                >
                  <Stack spacing={1}>
                    <TextField
                      label="Task Name"
                      value={quest.tname}
                      variant="outlined"
                      disabled
                      InputProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.9)", // Translucent text
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.6)", // Translucent label
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "rgba(255, 255, 255, 0.3)", // Border transparency
                        },
                      }}
                    />
                    <TextField
                      label="Duration"
                      value={quest.duration}
                      variant="outlined"
                      disabled
                      InputProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.6)",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    />
                    <TextField
                      label="Apps Needed"
                      value={quest.apps}
                      variant="outlined"
                      disabled
                      InputProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.6)",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    />
                    <TextField
                      label="Priority"
                      value={quest.priority}
                      variant="outlined"
                      disabled
                      InputProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.6)",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    />
                    <TextField
                      label="Deadline"
                      value={quest.deadline}
                      variant="outlined"
                      disabled
                      InputProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.6)",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    />
                  </Stack>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body1"
              color="rgba(255, 255, 255, 0.8)"
              textAlign="center"
            >
              No tasks right now 😣 Add a task to get started!
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ViewTasks;