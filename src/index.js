import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './index.css';

import App from './components/App';
import Header from './components/Header';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<Router>
      <div>
      	<Header />
	      <Switch>
	        <Route path="/" exact component={App}/>
	        <Route component={NotFound}/>
	      </Switch>
	    </div>
    </Router>
	);
};

render(<Root />, document.getElementById('root'));
registerServiceWorker();
