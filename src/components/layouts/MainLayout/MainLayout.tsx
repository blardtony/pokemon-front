import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const MainLayout: React.FC = () => {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<div className="container mx-auto px-4 md:px-0 flex-1">
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
