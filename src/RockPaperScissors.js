import RPSButtons from './RPSButtons.js';
import RPSInput from './RPSInput.js';
import RPSRecords from './RPSRecords.js';
import React from 'react';
import recordsReducer from './recordsReducer';

const moves = ['Rock', 'Paper', 'Scissors'];
const IsEmojiContext = React.createContext(false);
const emoji = { Rock: '🗿', Paper: '📝', Scissors: '✂️' };

//RPSInput.js
function RPSInput(props) {
  const [selectedMove, setSelectedMove] = React.useState('Rock');
  const [isWin, setIsWin] = React.useState(false);
  return (
    <div>
      <select
        value={selectedMove}
        onChange={(e) => setSelectedMove(e.target.value)}
      >
        <option value="Rock">Rock</option>
        <option value="Paper">Paper</option>
        <option value="Scissors">Scissors</option>
      </select>
      <input
        type="checkbox"
        checked={isWin}
        onChange={(e) => setIsWin(e.target.checked)}
      />{' '}
      Win?
      <button
        onClick={() =>
          props.onAdd({ move: selectedMove, result: isWin ? 'Win' : 'Lose' })
        }
      >
        Add
      </button>
    </div>
  );
}

// RPSButton.js
function RPSButton(props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isEmoji = React.useContext(IsEmojiContext);
  const winCount = props.records.filter(
    (record) => record.result === 'Win'
  ).length;
  const totalCount = props.records.length;
  const percentage = totalCount ? (winCount / totalCount) * 100 : 0;
  return (
    <button
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEmoji ? emoji[props.move] : props.move}{' '}
      {isHovered && `(${percentage.toFixed(2)}%)`}
    </button>
  );
}

function RPSButtons(props) {
  return (
    <div>
      {moves.map((move, index) => (
        <RPSButton
          key={move}
          onClick={() => props.onButtonPressed(move)}
          move={move}
          records={props.records.filter((record) => record.move === move)}
        />
      ))}
    </div>
  );
}

function RPSRecords(props) {
  const isEmoji = React.useContext(IsEmojiContext);
  let winPercentage = 0;
  if (props.records.length)
    winPercentage =
      (props.records.filter((record) => record.result === 'Win').length /
        props.records.length) *
      100;

  return (
    <div>
      <p>Rounds (Win %: {winPercentage.toFixed(2)}%):</p>
      <ul>
        {props.records.map((record, index) => (
          <li key={index} onClick={() => props.onHide(index)}>
            {record.result} ({isEmoji ? emoji[record.move] : record.move})
          </li>
        ))}
      </ul>
    </div>
  );
}

function RockPaperScissors(props) {
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const [isEmoji, setIsEmoji] = React.useState(false);
  return (
    <IsEmojiContext.Provider value={isEmoji}>
      <div>
        <RPSButtons
          onButtonPressed={(move) => {
            dispatch({ name: 'add', move });
          }}
          records={records}
        />
        <RPSInput onAdd={(record) => dispatch({ name: 'force add', record })} />
        <button onClick={() => setIsEmoji(!isEmoji)}>Toggle Emoji</button>
        <RPSRecords
          records={records}
          onHide={(index) => {
            dispatch({ name: 'remove', index });
          }}
        />
      </div>
    </IsEmojiContext.Provider>
  );
}

export default function App() {
  return (
    <div>
      <RockPaperScissors />
    </div>
  );
}


// export default function RockPaperScissors(props) {
//     const [records, setRecords] = React.useState([]);
//     return (
//         <div>
//             <h1>Play rock-paper-scissors with me!</h1>
//             <RPSButtons
//                 onButtonPressed={(move) => {
//                     const randomNumber = Math.floor(Math.random() * 3);
//                     let result;
//                     if (randomNumber === 0) result = 'Win';
//                     else if (randomNumber === 1) result = 'Lose';
//                     else result = 'Tie';

//                     setRecords([...records, { result: result, move: move }]);
//                 }}
//                 records={records}
//             />
//             <RPSInput onAdd={(record) => setRecords([...records, record])} />
//             <RPSRecords
//                 records={records}
//                 onDeleteRecord={(index) => {
//                     records.splice(index, 1);
//                     setRecords([...records]);
//                 }}
//             />
//         </div>
//     );
// }
