import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Tester() { 
    
    const navigate = useNavigate();

    const trial = () => {
        navigate("/quests")
    }

    useEffect(() => {
        trial();
    }, [])
    
    return null;
}

export default Tester;