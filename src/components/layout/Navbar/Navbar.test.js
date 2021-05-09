import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Navbar />);
    expect(component).toBeTruthy();
  });
});
