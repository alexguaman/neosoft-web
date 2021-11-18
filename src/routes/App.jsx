import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientSave from '../containers/ClientSave';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import '../styles/global.css';
import useInitialState from '../hooks/useInitialState';

const App = () => {
	const initialState = useInitialState();

	return (		
		<AppContext.Provider value={initialState}>

		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/client-save" component={ClientSave} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;