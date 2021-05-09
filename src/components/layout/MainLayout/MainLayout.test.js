import React from 'react';
import MainLayout from './MainLayout';
import { shallow } from 'enzyme';

describe('MainLayout Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainLayout />);
    expect(component).toBeTruthy();
  });
});
