import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
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
    const component = shallow(<Header />);
    expect(component).toBeTruthy();
  });
});
