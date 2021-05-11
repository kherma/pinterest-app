import React from 'react';
import ButtonSave from './ButtonSave';
import { shallow } from 'enzyme';

describe('ButtonSave Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ButtonSave />);
    expect(component).toBeTruthy();
  });
});
