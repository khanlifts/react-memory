import React from 'react';
import { shallow } from 'enzyme';
import MemoryApp from '../../components/MemoryApp';

test('should render component correctly', () => {
  const wrapper = shallow(<MemoryApp />);
  expect(wrapper).toMatchSnapshot();
});

test('should render gitHubCorner', () => {
  const wrapper = shallow(<MemoryApp />);
  // expect(wrapper.find('.app__container')).to.have.length(1);
});
