import questionsData from './questions.json';
//import { useState } from 'react';


function Board({ onSelectCard }) {
    const { categories } = questionsData;

    return (
        <div className="board">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="board-column">
                    <div className="board-category">{category.name}</div>
                    {category.questions.map((question, questionIndex) => (
                        <button
                            key={questionIndex}
                            className="board-cell board-cell--available"
                            onClick={() => onSelectCard(categoryIndex, questionIndex, question.value)}
                        >
                            ${question.value}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;