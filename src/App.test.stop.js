import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import ReactDOM from 'react-dom';
import React from 'react';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
  // const linkElement = screen.getByText('Sidebar');
  // expect(linkElement).toBeInTheDocument();
});
