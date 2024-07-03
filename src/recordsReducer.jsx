// recordsReducer.jsx
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export default function recordsReducer(currentRecords, action) {
  switch (action.name) {
    case 'add': {
      const randomInt = getRandomInt(0, 3);
      let result;
      if (randomInt === 0) result = 'Win';
      else if (randomInt === 1) result = 'Lose';
      else result = 'Tie';

      return [...currentRecords, { result: result, move: action.move }];
    }
    case 'force add': {
      return [...currentRecords, action.record];
    }
    case 'remove': {
      return currentRecords.filter((_, index) => index !== action.index);
    }
    default:
      return currentRecords;
  }
}
