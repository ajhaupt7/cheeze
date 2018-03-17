/**
 * Takes a type (the state property to update)
 * and updates the property with the given data.
 *
 * @param state
 * @param {Object} payload
 * @param {string} payload.type
 * @param {*} payload.data
 */
export const setData = (state, payload) => {
  state[payload.type] = payload.data;
};
