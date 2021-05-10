import React from 'react';
import ImageItemInfo from './ImageItemInfo';
import { shallow } from 'enzyme';

describe('ImageItemInfo Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageItemInfo />);
    expect(component).toBeTruthy();
  });
});
