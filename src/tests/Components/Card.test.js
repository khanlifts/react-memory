import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

test('should render Grid correctly', () => {
  const wrapper = shallow(<Card />);
  // expect(wrapper.find('button').text()).toBe('x');
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Card />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  //
  // console.log(renderer.getRenderOutput());
});
