import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import Count from '../Routes/Count';
import Recent from '../Routes/Recent';
import Search from '../Routes/Search';

export default () => (
	<Router>
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/count" exact component={Count} />
				<Route path="/recent" exact component={Recent} />
				<Route path="/search" exact component={Search} />
				<Redirect from="*" to="/" />
			</Switch>
		</React.Fragment>
	</Router>
);
