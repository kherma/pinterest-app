import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  application: {
    currentPage: 1,
    limitPerPage: 25,
    theme: 'light',
    asideStatus: false,
    breakpoint: {
      default: 7,
      1199: 3,
      700: 2,
      360: 1,
    },
    navigation: [
      { id: uuidv4(), text: 'explore', linkTo: '/' },
      { id: uuidv4(), text: 'favorites', linkTo: '/favorites' },
    ],
  },
  userData: {
    favorites: [],
  },
  images: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
