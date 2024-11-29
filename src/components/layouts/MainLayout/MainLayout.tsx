import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const MainLayout: React.FC = () => {
	return (
		<>
			<Header />
			<div className="container mx-auto px-4 md:px-0 h-dvh">
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
