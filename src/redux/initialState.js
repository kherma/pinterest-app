export const initialState = {
  application: {
    currentPage: 0,
    limitPerPage: 25,
    navigation: [
      { text: 'explore', linkTo: '/' },
      { text: 'favorites', linkTo: '/favorites' },
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
