import React from "react";
import { useState } from "react";
import {Button, Popover, Stack } from "@mui/material";
import Add from './Add'
import { useNavigate } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import { useContext } from "react";
import { QuestContext } from "./QuestManager";

// remove if it causes issues
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, dangerouslyAllowBrowser: true });

// remove if it causes issues
// const sortQuests = async (quests, setQuests, ai) => {
//     const prompt = `
//       Here is a list of tasks:
//       ${JSON.stringify(quests)}
  
//       Sort these tasks in the following order:
//       1. First by deadline (earliest first).
//       2. If deadlines are the same, by priority (higher priority first).
//       3. If priority is also the same, by estimated duration (longest duration first).
  
//       Return the sorted list in JSON format.
//     `;
  
//     try {
//       const response = await ai.models.generateContent({
//         model: "gemini-2.0-flash",
//         contents: prompt,
//       });
  
//       const sortedQuests = JSON.parse(response.text);
//       setQuests(sortedQuests);
//     } catch (err) {
//       console.error("Failed to sort:", err);
//     }
// }
  

function Options() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [addForm, setAddForm] = useState(false);
    const navigate = useNavigate();
    const { quests, setQuests } = useContext(QuestContext);

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
        navigate("/view");
        setAnchorEl(null);
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