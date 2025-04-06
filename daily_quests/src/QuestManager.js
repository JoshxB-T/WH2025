import React from "react";
import { useState, createContext } from "react";

export const QuestContext = createContext();

function QuestsManager( { children } ) {
    const [quests, setQuests] = useState([]);

    // Async function to send quest data to Django
    const sendQuestToBackend = async (currQuest) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/test-gemini/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currQuest),
            });

            if (!response.ok) {
                throw new Error('HTTP error!');
            }

            const responseData = await response.json();
            console.log('Received response:', responseData);
        } catch (error) {
            console.error('Error sending quest to backend:', error);
        }
    };

    const insertQuest = (currQuest) => {
        setQuests( (prevQuests) => [...prevQuests, currQuest]);
        sendQuestToBackend(currQuest);
    }

    const removeQuest = (currQuest) => {
        setQuests((prevQuests) => prevQuests.filter((_, i) => i !== currQuest));
    }

    return (
        <QuestContext.Provider value = {{quests, insertQuest, removeQuest}}>
            { children }
        </QuestContext.Provider>
    );
}

export default QuestsManager;