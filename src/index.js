import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { App } from './components/App/App';
import './styles/app.scss';

const StyledButton = styled.div`
  color: red;
  font-size: 32px;
`;

const Example = () => {
  return <StyledButton>Login</StyledButton>
}

ReactDOM.render(
  <App />, document.getElementById('root')
  // <Example />, document.getElementById('root')
);