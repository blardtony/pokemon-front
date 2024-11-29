import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
	return (
		<>
			<div className="container mx-auto px-4 md:px-0 h-dvh">
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
