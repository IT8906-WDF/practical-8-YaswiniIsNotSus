function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
  
  export default function recordsReducer(currentRecords, action) {
        switch (action.name) {
        case 'add': {
          // copy-pasted from RockPaperScissors component, remember to copy getRandomInt definition too
          const randomInt = getRandomInt(0, 3);
  
          let result;
          if (randomInt === 0) result = 'Win';
          else if (randomInt === 1) result = 'Lose';
          else result = 'Tie';
  
          // We expect the move to be provided along with the action (e.g. dispatch({ name: add, move: 'Rock' }))
          return [...currentRecords, { result: result, move: action.move }];
        }
        case 'force add': {}
        case 'remove': {}
        default: return currentRecords;
      }
  }