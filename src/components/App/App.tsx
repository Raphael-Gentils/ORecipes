import { useState, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from '../Authentication/Authentication';
import Menu from '../Menu/Menu';
import Recipes from '../Recipes/Recipes';
import Loader from '../Loader/Loader';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import { IRecipe } from '../../@types';
import './App.scss';

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
			<Authentication />

			<Menu recipes={recipes} />

			{!recipesLoaded && <Loader />}

			<Routes>
				{recipes.map((recipe) => (
					<Route
						key={recipe.id}
						path="/"
						element={<Recipes recipes={recipes} />}
					/>
				))}

				<Route path="/:slug" element={<RecipeDetail recipes={recipes} />} />

				<Route
					path="*"
					element={<div>Page non trouvée / pas encore en place</div>}
				/>
			</Routes>
		</div>
	);
}

export default App;
