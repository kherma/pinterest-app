/* selectors */
export const getFavorites = ({ userData }) => userData.favorites;

/* action name creator */
const reducerName = 'favorites';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('TOGGLE_IMAGE_INFO');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');

/* action creators */
export const addToFavorites = (payload) => ({
  payload,
  type: ADD_TO_FAVORITES,
});

export const removeFromFavorites = (payload) => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const newState = [...statePart.favorites];
      newState.push(action.payload);
      return {
        ...statePart,
        favorites: newState,
      };
    }
    case REMOVE_FROM_FAVORITES: {
      const newState = [...statePart.favorites];
      const index = newState.indexOf(action.payload);
      newState.splice(index, 1);
      return {
        ...statePart,
        favorites: newState,
      };
    }
    default:
      return statePart;
  }
}
