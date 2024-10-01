import { IRecipe } from '../../@types';
import Counter from '../Counter/Counter';
import Recipe from '../Recipe/Recipe';
import './Recipes.scss';

interface RecipesProps {
	recipes: IRecipe[];
}

export default function Recipes({ recipes }: RecipesProps) {
	return (
		<div className="main">
			<h1>Les recettes O'Recipes</h1>
			<Counter />
			<ul className="recipes">
				{recipes.map((recipe) => (
					<Recipe key={recipe.id} recipe={recipe} />
				))}
			</ul>
		</div>
	);
}
