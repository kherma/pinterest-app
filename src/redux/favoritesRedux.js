// import Axios from 'axios';

/* selectors */
export const getFavorites = ({ userData }) => userData.favorites;

/* action name creator */
const reducerName = 'favorites';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('TOGGLE_IMAGE_INFO');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
const SET_FAVORITES = createActionName('SET_FAVORITES');

/* action creators */
export const addToFavorites = (payload) => ({
  payload,
  type: ADD_TO_FAVORITES,
});

export const removeFromFavorites = (payload) => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});

export const setFavorites = () => ({
  type: SET_FAVORITES,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const newState = [...statePart.favorites];
      newState.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return {
        ...statePart,
        favorites: newState,
      };
    }
    case REMOVE_FROM_FAVORITES: {
      const newState = [...statePart.favorites];
      const index = newState.indexOf(action.payload);
      newState.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return {
        ...statePart,
        favorites: newState,
      };
    }
    case SET_FAVORITES: {
      const data = JSON.parse(localStorage.getItem('favorites'));
      return {
        ...statePart,
        favorites: data,
      };
    }
    default:
      return statePart;
  }
}
