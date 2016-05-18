import ReactDOM from 'react-dom';
import routes from './config/routes';

require('font-awesome-webpack');
require('./styles/app.sass');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
