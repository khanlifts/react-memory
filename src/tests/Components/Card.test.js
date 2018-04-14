import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

test('should render Grid correctly', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toMatchSnapshot();
});
