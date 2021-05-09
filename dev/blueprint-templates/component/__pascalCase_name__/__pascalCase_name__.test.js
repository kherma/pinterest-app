import React from 'react';
import {{pascalCase name}} from './{{pascalCase name}}';
import { shallow } from 'enzyme';

describe('{{pascalCase name}} Component', () => {
  it('should render without crashing', () => {
    const component = shallow(<{{pascalCase name}} />);
    expect(component).toBeTruthy();
  });
});
