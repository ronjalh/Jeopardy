import "./App.css";
import Board from "./Board";
import { useState } from 'react';
import questionsData from './questions.json';

function App() {
    const [activeCard, setActiveCard] = useState(null);

    // Inne i App-funksjonen:
    function handleSelectCard(categoryIndex, questionIndex, value) {
        const { question, answer } = questionsData.categories[categoryIndex].questions[questionIndex];
        setActiveCard({ categoryIndex, questionIndex, value, question, answer });
    }
    // I App.jsx – send funksjonen ned til Board:


    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board onSelectCard={handleSelectCard} />
        </div>
    );
}

export default App;
