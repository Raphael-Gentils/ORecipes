import { NavLink } from 'react-router-dom';
import { IRecipe } from '../../@types';
import './Menu.scss';

interface MenuProps {
	recipes: IRecipe[];
}

export default function Menu({ recipes }: MenuProps) {
	return (
		<div className="menu">
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? 'menu-link menu-link--selected' : 'menu-link'
				}
			>
				Accueil
			</NavLink>
			{recipes.map((recipe) => (
				<NavLink
					key={recipe.id}
					to={recipe.slug}
					className={({ isActive }) =>
						isActive ? 'menu-link menu-link--selected' : 'menu-link'
					}
				>
					{recipe.title}
				</NavLink>
			))}
		</div>
	);
}
