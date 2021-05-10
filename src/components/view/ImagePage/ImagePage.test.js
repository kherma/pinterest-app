import React from 'react';
import ImagePage from './ImagePage';
import { shallow } from 'enzyme';

describe('ImagePage Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImagePage />);
    expect(component).toBeTruthy();
  });
});
