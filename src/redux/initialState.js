import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  application: {
    currentPage: 1,
    lastPage: 40,
    limitPerPage: 25,
    hasMore: true,
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
  imageInfo: {
    display: false,
    data: {},
  },
  favoritesID: {
    data: [],
  },
  favorites: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  images: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
