import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
