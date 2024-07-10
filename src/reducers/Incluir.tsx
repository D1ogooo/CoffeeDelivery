  type StateType = {
   count: number;
  };
  
  type ActionType = {
   type: 'Increment' | 'Decrement';
  };
  
  export const IncludeReducer = (state: StateType, action: ActionType): StateType | string => {
    switch (action.type) {
     case 'Increment':
      return { ...state, count: state.count + 1 };
     case 'Decrement':
      return { ...state, count: state.count - 1 >= 0 ? state.count - 1 : 0 };
     default:
      return "This action doesn't exist";
    }
  };
  