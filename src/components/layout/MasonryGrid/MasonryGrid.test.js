import React from 'react';
import MasonryGrid from './MasonryGrid';
import { shallow } from 'enzyme';

describe('MasonryGrid Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<MasonryGrid />);
    expect(component).toBeTruthy();
  });
});
