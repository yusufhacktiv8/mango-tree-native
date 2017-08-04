const initialState = {
  name: 'Groot',
  age: 0,
};

export const tree = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TREE':
      return action.tree;
    case 'EMULATE_TREE':
      const tree = {
        name: state.name,
        age: state.age + 1,
      };
      return tree;
    default:
      return state;
  }
};
