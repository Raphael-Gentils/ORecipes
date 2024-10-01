import { IRecipe } from '../../@types';
import Counter from '../Counter/Counter';
import Loader from '../Loader/Loader';
import Recipe from '../Recipe/Recipe';
import './Recipes.scss';

interface RecipesProps {
	recipes: IRecipe[];
	isLoaded: boolean;
}

export default function Recipes({ recipes, isLoaded }: RecipesProps) {
	return (
		<div className="main">
			<h1>Les recettes O'Recipes</h1>
			<Counter />
			{isLoaded === false && <Loader />}
			<ul className="recipes">
				{recipes.map((recipe) => (
					<Recipe key={recipe.id} recipe={recipe} />
				))}
			</ul>
		</div>
	);
}
