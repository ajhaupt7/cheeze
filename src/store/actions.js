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

/**
 *
 * @param context
 * @param {Object} data - key should be the color
 *   type (i.e. COLORS.LIGHT or COLORS.DARK) and value
 *   should be the color string.
 */
export const updateColor = ({ commit, state }, data) => {
  commit('setData', {
    type: 'colors',
    data: { ...state.colors, ...data },
  });
};

/**
 * Clears the array keeping track of moves.
 *
 * @param context
 */
export const resetMoves = ({ commit }) => {
  commit('setData', {
    type: 'moves',
    data: [],
  });
};

