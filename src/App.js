import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import CheckResult from './components/CheckResult';

import './App.css';

function App(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<CheckResult />
				</Route>

				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
