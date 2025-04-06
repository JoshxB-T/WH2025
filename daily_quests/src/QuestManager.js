import React from "react";
import { useState, createContext } from "react";

export const QuestContext = createContext();

function QuestsManager( { children } ) {
    const [quests, setQuests] = useState([]);

    const insertQuest = (currQuest) => {
        setQuests( (prevQuests) => [...prevQuests, currQuest]);
    }

    return (
        <QuestContext.Provider value = {{quests, insertQuest}}>
            { children }
        </QuestContext.Provider>
    );
}

export default QuestsManager;