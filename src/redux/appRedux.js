/* selectors */
export const getCurrentPage = ({ application }) => application.currentPage;
export const getPageLimit = ({ application }) => application.limitPerPage;
export const getNavLinks = ({ application }) => application.navigation;
export const getCurrentTheme = ({ application }) => application.theme;
export const getAsideStatus = ({ application }) => application.asideStatus;

/* action name creator */
const reducerName = 'application';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENT_PAGE = createActionName('CHANGE_CURRENT_PAGE');
const CHANGE_CURRENT_THEME = createActionName('CHANGE_CURRENT_THEME');
const CHANGE_ASIDE_STATUS = createActionName('CHANGE_ASIDE_STATUS');

/* action creators */
export const changeCurrentPage = (payload) => ({
  payload,
  type: CHANGE_CURRENT_PAGE,
});

export const changeCurrentTheme = (payload) => ({
  payload,
  type: CHANGE_CURRENT_THEME,
});

export const changeAsideStatus = (payload) => ({
  payload,
  type: CHANGE_ASIDE_STATUS,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      return {
        ...statePart,
        currentPage: action.payload,
      };
    }

    case CHANGE_CURRENT_THEME: {
      return {
        ...statePart,
        theme: action.payload,
      };
    }

    case CHANGE_ASIDE_STATUS: {
      return {
        ...statePart,
        asideStatus: !statePart.asideStatus,
      };
    }
    default:
      return statePart;
  }
}
