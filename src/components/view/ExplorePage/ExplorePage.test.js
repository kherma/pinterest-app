import React from 'react';
import ExplorePage from './ExplorePage';
import { shallow } from 'enzyme';

describe('ExplorePage Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ExplorePage />);
    expect(component).toBeTruthy();
  });
});
