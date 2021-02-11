import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ResumeItem from './ResumeItem';

describe('Resume item component', () => {
  afterEach(() => cleanup());

  it('takes a snapshot of the component', () => {
    const { asFragment } = render(<ResumeItem props={{}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
