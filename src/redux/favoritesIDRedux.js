/* selectors */
export const getFavorites = ({ favoritesID }) => favoritesID.data;

/* action name creator */
const reducerName = 'favorites';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
const SET_FAVORITES = createActionName('SET_FAVORITES');

/* action creators */
export const addIDToFavorites = (payload) => ({
  payload,
  type: ADD_TO_FAVORITES,
});

export const removeIDFromFavorites = (payload) => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

export const setFavoritesID = () => ({
  type: SET_FAVORITES,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const newState = [...statePart.data];
      newState.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(newState));
      console.log(statePart);
      return {
        ...statePart,
        data: newState,
      };
    }
    case REMOVE_FROM_FAVORITES: {
      const newState = [...statePart.data];
      const index = newState.indexOf(action.payload);
      newState.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return {
        ...statePart,
        data: newState,
      };
    }
    case SET_FAVORITES: {
      const data = JSON.parse(localStorage.getItem('favorites'));
      return {
        ...statePart,
        data: data,
      };
    }
    default:
      return statePart;
  }
}
