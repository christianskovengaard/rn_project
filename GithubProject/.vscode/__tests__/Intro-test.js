// __tests__/Intro-test.js
import React from 'react';
import List from '../../src/views/list'

import renderer from 'react-test-renderer';
import "isomorphic-fetch"
test('renders correctly', () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});