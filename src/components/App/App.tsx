import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import Menu from '../Menu/Menu';
import Authentication from '../Authentication/Authentication';
import Recipes from '../Recipes/Recipes';
import { IRecipe } from '../../@types';
import Loader from '../Loader/Loader';

function App() {
	// ------ récupération des recettes depuis l'API ------

	// indique si les recettes sont chargées
	const [recipesLoaded, setRecipesLoaded] = useState(false);

	// les recettes à afficher
	const [recipes, setRecipes] = useState<IRecipe[]>([]);

	// requête API
	const getRecipes = useCallback(async () => {
		try {
			const response = await fetch('http://localhost:3000/api/recipes');
			const data = await response.json();
			setRecipes(data);
			setRecipesLoaded(true);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getRecipes();
	}, [getRecipes]);

	return (
		<div className="app">
			<Menu recipes={recipes} />
			<div className="container">
				<Authentication />
				{!recipesLoaded && <Loader />}
				<Recipes recipes={recipes} />
			</div>
		</div>
	);
}

export default App;
