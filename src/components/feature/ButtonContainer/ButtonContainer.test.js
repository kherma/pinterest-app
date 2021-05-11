import React from 'react';
import ButtonContainer from './ButtonContainer';
import { shallow } from 'enzyme';

describe('ButtonContainer Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ButtonContainer />);
    expect(component).toBeTruthy();
  });
});
