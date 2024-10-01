import './Authentication.scss';

export default function Authentication() {
	return (
		<div className="authentication">
			<img
				className="logo"
				src="../../../assets/logo.png"
				alt="logo O'Recipes"
			/>
			<form className="authentication">
				<input type="email" placeholder="Adresse Email" />
				<input type="text" placeholder="Mot de passe" />
				<button type="submit">OK</button>
			</form>
		</div>
	);
}
