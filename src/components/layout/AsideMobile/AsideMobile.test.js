import React from 'react';
import AsideMobile from './AsideMobile';
import { shallow } from 'enzyme';

describe('AsideMobile Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<AsideMobile />);
    expect(component).toBeTruthy();
  });
});
