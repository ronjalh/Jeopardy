import "./App.css";
import Board from "./Board";
import { useState } from 'react';

function App() {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="game-screen">
            <h1 className="game-title">🎯 Jeopardy</h1>
            <Board />
        </div>
    );
}

export default App;
