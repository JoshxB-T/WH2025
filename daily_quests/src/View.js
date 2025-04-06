import React from "react";
import { useContext } from "react";
import { QuestContext } from "./QuestManager";
import { Box, Typography, Stack, TextField, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // "X" button icon
import { useNavigate } from "react-router-dom";

function ViewTasks() {
  const { quests, removeQuest } = useContext(QuestContext); // Access quests from context
  const navigate = useNavigate(); // For navigation

  const handleGoBack = () => {
    navigate("/quests"); // Navigate to the /quests page (use / if this doesn't work)
  };

  const beginTask = (idx) => {
    const tempTask = quests[idx]; // Get the task details
    removeQuest(idx);
    navigate("/popup", { state: { tempTask } });
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100vw" height="100vh" position="fixed" top={0} left={0} sx={{backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1300}}>
      <Box padding={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ width: "400px", height: "600px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "12px", backdropFilter: "blur(10px)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
        {/* Header with X Button */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
            Task List
          </Typography>
          <IconButton onClick={handleGoBack}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>

        {/* Scrollable Task List */}
        <Box mt={2} width="100%" height="500px" overflow="auto" sx={{ scrollbarWidth: "thin", "&::-webkit-scrollbar": { width: "5px" }, "&::-webkit-scrollbar-thumb": { background: "rgba(255, 255, 255, 0.4)", borderRadius: "10px", }, }} >
          {quests.length > 0 ? (
            <Stack spacing={2}>
              {quests.map((quest, index) => (
                <Box key={index} padding={2} border="1px solid rgba(255, 255, 255, 0.3)" sx={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(255, 255, 255, 0.1)", }}>
                  <Stack spacing={1}>
                    <TextField label="Task Name" value={quest.tname} variant="outlined" disabled sx={{fieldset: { borderColor: "rgba(255, 255, 255, 0.3)", },}}/>
                    <Button variant="contained" color="primary" onClick={() => beginTask(index)} >
                      Start Task
                    </Button>
                  </Stack>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" textAlign="center">
              No tasks right now 😣 Add a task to get started!
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ViewTasks;