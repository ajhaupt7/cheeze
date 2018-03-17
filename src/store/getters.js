/**
 * Returns the id of the last move.
 *
 * @param state
 *
 * @returns {string}
 */
export const currentMoveId = (state) => {
  const { moves } = state;
  const move = moves[moves.length - 1];
  return move && move.id;
};
