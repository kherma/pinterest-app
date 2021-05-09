import React from 'react';
import NotFoundPage from './NotFoundPage';
import { shallow } from 'enzyme';

describe('NotFoundPage Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<NotFoundPage />);
    expect(component).toBeTruthy();
  });
});
