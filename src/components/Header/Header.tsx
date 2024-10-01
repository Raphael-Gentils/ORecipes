import { IRecipe } from '../../@types';
import './Header.scss';

interface HeaderProps {
	recipes: IRecipe[];
}

export default function Header({ recipes }: HeaderProps) {
	return (
		<div className="header">
			<nav>Accueil</nav>
			{recipes.map((recipe) => (
				<nav key={recipe.id}>{recipe.title}</nav>
			))}
		</div>
	);
}
