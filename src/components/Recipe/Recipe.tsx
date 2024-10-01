import './Recipe.scss';

export default function Recipe() {
	return (
		<>
			<div className="recipe">
				<img src="" alt="la recette" />
				<h2 className="title">Titre de la recette</h2>
				<h3 className="subtitle">Difficulté : Facile</h3>
				<button type="button">Voir la recette</button>
			</div>
		</>
	);
}
