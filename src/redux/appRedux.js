/* selectors */
export const getCurrentPage = ({ application }) => application.currentPage;
export const getPageLimit = ({ application }) => application.limitPerPage;
export const getNavLinks = ({ application }) => application.navigation;

/* action name creator */
const reducerName = 'application';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENT_PAGE = createActionName('CHANGE_CURRENT_PAGE');

/* action creators */
export const changeCurrentPage = (payload) => ({
  payload,
  type: CHANGE_CURRENT_PAGE,
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
    default:
      return statePart;
  }
}
