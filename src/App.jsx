import "./App.css";
import Board from "./Board";
import { useState } from 'react';
import questionsData from './questions.json';

function App() {
    const [activeCard, setActiveCard] = useState(null);

    function handleSelectCard(categoryIndex, questionIndex, value) {
        const { question, answer } = questionsData.categories[categoryIndex].questions[questionIndex];
        setActiveCard({ categoryIndex, questionIndex, value, question, answer });
    }
    
    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board onSelectCard={handleSelectCard} />

            {activeCard && (
                <div className="question-overlay">
                    <div className="question-card">
                        <div className="question-value">${activeCard.value}</div>
                        <div className="question-text">{activeCard.question}</div>
                        <div className="question-actions">
                            <button
                                className="btn btn--secondary"
                                onClick={() => setActiveCard(null)}
                            >
                                ← Tilbake til brettet
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
