import Counter from '../Counter/Counter';
import Recipe from '../Recipe/Recipe';
import './Recipes.scss';

export default function Recipes() {
	return (
		<>
			<h1>Les recettes O'Recipes</h1>
			<Counter />
			<Recipe />
		</>
	);
}
