import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';

import App from './components/App';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dogs from './components/Dogs';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

class Root extends Component {
	constructor() {
		super();

		this.state = {
			showSidebar: false
		};

		this._updateSidebar = this._updateSidebar.bind(this);
	}

	_updateSidebar(showSidebar) {
		this.setState({ showSidebar });
	}

	render() {
		const { showSidebar } = this.state;
		const rightContainerClassName = showSidebar ? "rightContainer--show" : "rightContainer";
		return (
			<Router>
	      <div className="rootContainer">
	      	<div className="leftContainer" onMouseEnter={() => {this._updateSidebar(false)}}>
			      <Header updateSidebar={this._updateSidebar} />
			      <Switch>
			        <Route path="/" exact component={App} />
			        <Route path="/poodles" exact component={Dogs} />
			        <Route component={NotFound}/>
			      </Switch>
			    </div>
		    	<div className={rightContainerClassName}>
		  			<Sidebar />
			  	</div>
		    </div>
	    </Router>
		);
	}
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
