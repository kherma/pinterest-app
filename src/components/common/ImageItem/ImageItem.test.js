import React from 'react';
import ImageItem from './ImageItem';
import { shallow } from 'enzyme';

describe('ImageItem Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageItem />);
    expect(component).toBeTruthy();
  });
});
