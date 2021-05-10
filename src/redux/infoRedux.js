/* selectors */
export const getDisplayStatus = ({ imageInfo }) => imageInfo.display;
export const getData = ({ imageInfo }) => imageInfo.data;

/* action name creator */
const reducerName = 'info';
const createActionName = (name) => `action/${reducerName}/${name}`;

/* action types */
const TOGGLE_IMAGE_INFO = createActionName('TOGGLE_IMAGE_INFO');

/* action creators */
export const toggleImageInfo = (payload) => ({
  payload,
  type: TOGGLE_IMAGE_INFO,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_IMAGE_INFO: {
      return {
        ...statePart,
        display: !statePart.display,
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
}
