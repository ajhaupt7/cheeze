export const setData = (state, payload) => {
  state[payload.type] = payload.data;
}
