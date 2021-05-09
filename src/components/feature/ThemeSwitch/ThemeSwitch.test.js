import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { shallow } from 'enzyme';

describe('ThemeSwitch Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ThemeSwitch />);
    expect(component).toBeTruthy();
  });
});
