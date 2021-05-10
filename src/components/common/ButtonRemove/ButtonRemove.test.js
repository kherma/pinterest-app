import React from 'react';
import ButtonRemove from './ButtonRemove';
import { shallow } from 'enzyme';

describe('ButtonRemove Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ButtonRemove />);
    expect(component).toBeTruthy();
  });
});
