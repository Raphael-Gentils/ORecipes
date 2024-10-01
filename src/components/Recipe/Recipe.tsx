import { IRecipe } from '../../@types';
import './Recipe.scss';

interface RecipeProps {
	recipe: IRecipe;
}

export default function Recipe({ recipe }: RecipeProps) {
	return (
		<div className="recipe">
			<img src={recipe.thumbnail} alt={recipe.title} />
			<div className="description">
				<h2 className="title">{recipe.title}</h2>
				<p className="subtitle">Difficulté : {recipe.difficulty}</p>
				<button type="button">Voir la recette</button>
			</div>
		</div>
	);
}
