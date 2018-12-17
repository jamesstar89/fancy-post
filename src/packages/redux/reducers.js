export const initialState = {
  typeHereValue: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_HERE_VALUE':
      return Object.assign({}, state, {
        typeHereValue: action.value,
      });
    default:
      return state;
  }
};
