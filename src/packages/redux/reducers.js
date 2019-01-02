export const initialState = {
  typeHereValue: undefined,
};

export const activeOptionAction = {
  option: undefined,
};

export const typeHereReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_HERE_VALUE':
      return Object.assign({}, state, {
        typeHereValue: action.value,
      });
    default:
      return state;
  }
};

export const activeOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_OPTION':
      return Object.assign({}, state, {
        activeOption: action.activeOption,
      });
    default:
      return state;
  }
};

export default typeHereReducer;
