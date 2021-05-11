import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme';

describe('Loading Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Loading />);
    expect(component).toBeTruthy();
  });
});
