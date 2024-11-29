import { useEffect } from 'react';
import loginImage from '../../assets/images/background_login.png';
const LoginPage = () => {
	useEffect(() => {
		document.body.style.backgroundImage = `url(${loginImage})`;
		return () => {
			document.body.style.backgroundImage = '';
		};
	});
	return (
		<div>
			<h2>Login</h2>
		</div>
	);
};

export default LoginPage;
