export const reducer = (prev, action = {}) => {
  switch (action.type) {
    case "input/change":
      return {
        ...prev,
        input: action.payload,
      };

    case "remainTurn/decrement":
      //   console.log(prev.remainTurn);
      return {
        ...prev,
        remainTurn: prev.remainTurn - 1,
      };

    case "play/set":
      return {
        ...prev,
        ...action.payload,
      };

    case "historyData/set":
      return {
        ...prev,
        historyDataRound: action.payload,
      };

    default:
      return prev;
  }
};
