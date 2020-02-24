import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import AddBookmark from './AddBookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<AddBookmark />), div);
  ReactDOM.unmountComponentAtNode(div);
});
