import { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Authentication from '../Authentication/Authentication';
import Recipes from '../Recipes/Recipes';

export default function App() {
	return (
		<>
			<Header />
			<Authentication />
			<Recipes />
		</>
	);
}
