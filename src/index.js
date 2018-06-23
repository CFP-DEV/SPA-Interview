import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Root
import Root from './config/Root';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
