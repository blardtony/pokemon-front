import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="container mx-auto px-4 md:px-0 h-16 flex items-center justify-between">
				<div className="font-bold text-xl">Header</div>
				<div>
					<Link className="btn" to={'/login'}>
						se connecter
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
