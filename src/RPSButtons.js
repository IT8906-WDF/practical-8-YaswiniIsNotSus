import React from 'react';
import { IsEmojiContext, emoji } from './IsEmojiContext';

export default function RPSButtons(props) {
  const isEmoji = React.useContext(IsEmojiContext);
  return (
    <div>
      {['Rock', 'Paper', 'Scissors'].map((move) => (
        <button key={move} onClick={() => props.onButtonPressed(move)}>
          {isEmoji ? emoji[move] : move}
        </button>
      ))}
    </div>
  );
}


// const moves = ['Rock', 'Paper', 'Scissors'];

// export default function RPSButtons(props) {
//     return (
//         <div>
//             {moves.map((move) => (
//                 <RPSButton
//                     key={move}
//                     onClick={() => props.onButtonPressed(move)}
//                     move={move}
//                     records={props.records.filter((record) => record.move === move)}
//                 />
//             ))}
//         </div>
//     );
// }
