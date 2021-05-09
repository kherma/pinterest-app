import React from 'react';
import FavoritesPage from './FavoritesPage';
import { shallow } from 'enzyme';

describe('FavoritesPage Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<FavoritesPage />);
    expect(component).toBeTruthy();
  });
});
