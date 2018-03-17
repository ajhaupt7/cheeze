/**
 * Registers a new move when a square is clicked.
 *
 * @param context
 * @param { Object } square
 * @param { string } square.id
 * @param { string } square.colorType
 */
export const registerMove = ({ commit, state }, square) => {
  commit('setData', {
    type: 'moves',
    data: [...state.moves, square],
  });
};
