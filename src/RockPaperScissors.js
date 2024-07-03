import RPSButtons from './RPSButtons.js';
import RPSInput from './RPSInput.js';
import RPSRecords from './RPSRecords.js';
import recordsReducer from './recordsReducer';

export default function RockPaperScissors(props) {
    const [records, setRecords] = React.useState([]);
    return (
        <div>
            <h1>Play rock-paper-scissors with me!</h1>
            <RPSButtons
                onButtonPressed={(move) => {
                    const randomNumber = Math.floor(Math.random() * 3);
                    let result;
                    if (randomNumber === 0) result = 'Win';
                    else if (randomNumber === 1) result = 'Lose';
                    else result = 'Tie';

                    setRecords([...records, { result: result, move: move }]);
                }}
                records={records}
            />
            <RPSInput onAdd={(record) => setRecords([...records, record])} />
            <RPSRecords
                records={records}
                onDeleteRecord={(index) => {
                    records.splice(index, 1);
                    setRecords([...records]);
                }}
            />
        </div>
    );
}
