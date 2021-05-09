/* selectors */
export const getCurrentPage = ({ application }) => application.currentPage;
export const getPageLimit = ({ application }) => application.limitPerPage;
export const getNavLinks = ({ application }) => application.navigation;
export const getCurrentTheme = ({ application }) => application.theme;

/* action name creator */
const reducerName = 'application';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENT_PAGE = createActionName('CHANGE_CURRENT_PAGE');
const CHANGE_CURRENT_THEME = createActionName('CHANGE_CURRENT_THEME');

/* action creators */
export const changeCurrentPage = (payload) => ({
  payload,
  type: CHANGE_CURRENT_PAGE,
});

export const changeCurrentTheme = (payload) => ({
  payload,
  type: CHANGE_CURRENT_THEME,
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
    default:
      return statePart;
  }
}
