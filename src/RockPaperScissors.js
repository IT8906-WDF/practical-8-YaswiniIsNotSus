import RPSButtons from './RPSButtons.js';
import RPSInput from './RPSInput.js';
import RPSRecords from './RPSRecords.js';
import React from 'react';
import recordsReducer from './recordsReducer';
import { IsEmojiContext } from './IsEmojiContext';

export default function RockPaperScissors(props) {
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const [isEmoji, setIsEmoji] = React.useState(false);

  return (
    <IsEmojiContext.Provider value={isEmoji}>
      <div>
        <RPSButtons
          onButtonPressed={(move) => {
            dispatch({ name: 'add', move: move });
          }}
          records={records}
        />
        <RPSInput onAdd={(record) => dispatch({ name: 'force add', record: record })} />
        <RPSRecords
          records={records}
          onHide={(index) => {
            dispatch({ name: 'remove', index: index });
          }}
        />
        <button onClick={() => setIsEmoji(!isEmoji)}>Toggle Emoji</button>
      </div>
    </IsEmojiContext.Provider>
  );
}

//
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
