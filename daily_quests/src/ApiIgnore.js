import React, { useContext } from "react";
import { QuestContext } from "./QuestManager";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function SortAndDisplayQuests() {
  const { quests, setQuests } = useContext(QuestContext); // Access quests and context

  const sortQuests = async () => {
    // Construct the prompt
    const prompt = `
      Here is a list of tasks:
      ${JSON.stringify(quests)}

      Sort these tasks in the following order:
      1. First by deadline (earliest first).
      2. If deadlines are the same, by priority (higher priority first).
      3. If priority is also the same, by estimated duration (longest duration first).

      Return the sorted list in JSON format.
    `;

    try {
      // Generate sorted content using the AI
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      // Parse the sorted list
      const sortedQuests = JSON.parse(response.text);
      console.log("Sorted Quests:", sortedQuests);

      // Update the quests context with the sorted list
      setQuests(sortedQuests);
    } catch (error) {
      console.error("Error parsing AI response:", error);
    }
  };

  return (
    <div>
      <button onClick={sortQuests}>Sort Tasks</button>
      <h2>Sorted Tasks</h2>
      <ul>
        {quests.map((task, index) => (
          <li key={index}>
            <strong>{task.tname}</strong> - Deadline: {task.deadline}, Priority:{" "}
            {task.priority}, Duration: {task.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortAndDisplayQuests;