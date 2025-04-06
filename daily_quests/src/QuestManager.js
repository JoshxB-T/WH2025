import React from "react";
import { useState, createContext } from "react";

export const QuestContext = createContext();

function QuestsManager( { children } ) {
    const [quests, setQuests] = useState([]);

    const insertQuest = (currQuest) => {
        setQuests( (prevQuests) => [...prevQuests, currQuest]);
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