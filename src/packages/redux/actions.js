export const typeHereAction = value => ({
  type: 'TYPE_HERE_VALUE',
  value,
});

export const activeOptionAction = activeOption => ({
  type: 'ACTIVE_OPTION',
  activeOption,
});

export default {
  typeHereAction,
  activeOptionAction
};
