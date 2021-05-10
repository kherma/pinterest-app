import React from 'react';
import ImageItemMobile from './ImageItemMobile';
import { shallow } from 'enzyme';

describe('ImageItemMobile Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageItemMobile />);
    expect(component).toBeTruthy();
  });
});
