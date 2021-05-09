import React from 'react';
import CameraLogo from './CameraLogo';
import { shallow } from 'enzyme';

describe('CameraLogo Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<CameraLogo />);
    expect(component).toBeTruthy();
  });
});
