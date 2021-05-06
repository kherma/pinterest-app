import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
