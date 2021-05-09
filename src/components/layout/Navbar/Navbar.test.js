import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar Component', () => {
  beforeEach(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });
  it('should render without crashing', () => {
    const component = shallow(<Navbar />);
    expect(component).toBeTruthy();
  });
});
