import React from 'react';
import { mount } from 'enzyme';
import TypeHere from '../TypeHere';

describe('TypeHere', () => {
  test('Should render', () => {
    const Preview = () => <div />;
    const tree = mount(<TypeHere preview={Preview} />);
    expect(tree).toMatchSnapshot();
  });
});
