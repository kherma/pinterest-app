import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  application: {
    currentPage: 0,
    limitPerPage: 25,
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
