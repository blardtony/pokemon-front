import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const MainLayout: React.FC = () => {
	return (
		<div className="h-dvh">
			<Header />
			<div className="container mx-auto px-4 md:px-0">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
