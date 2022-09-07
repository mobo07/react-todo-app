export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      state = [...state, action.payload];
      return state;
    }
    case "REMOVE_TODO": {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    }
    case "COMPLETE": {
      let newList = [];
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          let completed;
          completed = !todo.completed;
          newList.push({ ...todo, completed });
        } else {
          newList.push({ ...todo });
        }
      });
      state = [...newList];
      return state;
    }
    default:
      return state;
  }
};
