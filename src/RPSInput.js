// export default function RPSInput(props) {
//     const [selectedMove, setSelectedMove] = React.useState('Rock');
//     const [isWin, setIsWin] = React.useState(false);
//     return (
//         <div>
//             <select value={selectedMove} onChange={(e) => setSelectedMove(e.target.value)}>
//                 <option value="Rock">Rock</option>
//                 <option value="Paper">Paper</option>
//                 <option value="Scissors">Scissors</option>
//             </select>
//             <input type="checkbox" checked={isWin} onChange={(e) => setIsWin(e.target.checked)} /> Win?
//             <button onClick={() => props.onAdd({ move: selectedMove, result: isWin ? 'Win' : 'Lose' })}>Add</button>
//         </div>
//     );
// }
import React, { useState } from 'react';

export default function RPSInput(props) {
  const [move, setMove] = useState('');
  const [result, setResult] = useState('');

  const addRecord = () => {
    if (move && result) {
      props.onAdd({ move, result });
      setMove('');
      setResult('');
    }
  };

  return (
    <div>
      <input value={move} onChange={(e) => setMove(e.target.value)} placeholder="Move" />
      <input value={result} onChange={(e) => setResult(e.target.value)} placeholder="Result" />
      <button onClick={addRecord}>Add Record</button>
    </div>
  );
}

  