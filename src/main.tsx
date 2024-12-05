import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import HomePage from './components/Home/Home.page';
import LoginPage from './components/Login/Login.page';
import SignInPage from './components/SignIn/SignIn.page';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <SignInPage />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />,
);
