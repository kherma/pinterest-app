import Axios from 'axios';

/* selectors */
export const getAll = ({ favorites }) => favorites.data;
export const getLoading = ({ favorites }) => favorites.loading;

/* action name creator */
const reducerName = 'favorites';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_SINGLE = createActionName('ADD_SINGLE');
const REMOVE_SINGLE = createActionName('REMOVE_SINGLE');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = () => ({ type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addSingle = (payload) => ({ payload, type: ADD_SINGLE });
export const removeSingle = (payload) => ({ payload, type: REMOVE_SINGLE });

/* thunk creators */
export const fetchSingleFromAPI = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`https://picsum.photos/id/${id}/info`)
      .then((res) => {
        dispatch(addSingle(res.data));
      })
      .then((res) => {
        dispatch(fetchSuccess());
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchAllFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    const {
      favoritesID: { data: favIDData },
    } = getState();

    favIDData.forEach((id) => {
      Axios.get(`https://picsum.photos/id/${id}/info`)
        .then((res) => {
          dispatch(addSingle(res.data));
        })
        .then((res) => {
          if (getState().favorites.data.length === favIDData.length) {
            dispatch(fetchSuccess());
          }
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case ADD_SINGLE: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case REMOVE_SINGLE: {
      const newState = [...statePart.data];
      const index = newState.findIndex((item) => item.id === action.payload);
      newState.splice(index, 1);
      return {
        ...statePart,
        data: newState,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
