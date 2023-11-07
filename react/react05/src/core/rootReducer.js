export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count: state.count + 1 };
    }
    case "counter/decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "chat/message": {
      return { ...state, message: [...state.message, action.payload] };
    }
    default: {
      return state;
    }
  }
};
