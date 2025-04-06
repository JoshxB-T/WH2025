import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Quests from './Quests';
import Add from './Add';
import Tester from './Testing';
import View from './View';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import QuestProvider from './QuestManager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Tester />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </QuestProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
