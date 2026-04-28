import questionsData from './questions.json';
// questionsData.categories er nå en liste med alle kategoriene


function Board() {

    return (
        <div classname="board">
        {questionsData.categories.map((category, index) => (
            <div key={index}>{category.name}</div>
        ))}
        </div>
    );
}

export default Board;