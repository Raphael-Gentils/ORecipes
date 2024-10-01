import { Navigate, useParams } from 'react-router-dom';
import { IRecipe } from '../../@types';
import './RecipeDetail.scss';

interface RecipeDetailProps {
	recipes: IRecipe[];
}

export default function RecipeDetail({ recipes }: RecipeDetailProps) {
	const { slug } = useParams();

	const recipe = recipes.find((recipe) => recipe.slug === slug);
	const ingredients = recipe?.ingredients;

	if (recipe === undefined) {
		return <Navigate to="/" />;
	}

	return (
		<div className="recipe-detail">
			<img
				className="recipe-detail--img"
				src={recipe.thumbnail}
				alt={recipe.title}
			/>
			<div className="ingredients">
				{ingredients?.map((ingredient) => (
					<div key={ingredient.id} className="ingredients-detail">
						<button className="ingredients-detail-quantity" type="button">
							{ingredient.quantity} {ingredient.unit}
						</button>
						<p className="ingredients-detail-name">{ingredient.name}</p>
					</div>
				))}
			</div>
			<div className="steps">{recipe.instructions}</div>
		</div>
	);
}
