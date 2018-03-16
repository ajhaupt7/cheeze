const setData = (state, payload) => {
  state[payload.type] = payload.data;
};

export default {
  setData,
};
