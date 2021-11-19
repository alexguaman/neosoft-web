import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './routes/App';

const options = {
    position: 'middle',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}

const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )

ReactDOM.render(<Root />, document.getElementById('root'));
