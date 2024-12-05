import axios from 'axios';

export const login = async (login: string, password: string) => {
	try {
		const result = await axios.post('http://localhost:8000/login', {
			login,
			password,
		});

		return {
			accessToken: result.data.accessToken,
			trainerId: result.data.trainerId,
			statusCode: result.status,
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return {
				statusCode: error?.response?.status,
				errorDetails: error?.response?.data.errorDetails,
			};
		}
		return { statusCode: 500, errorDetails: 'Internal server error' };
	}
};

export const subscribe = async (
	lastName: string,
	firstName: string,
	login: string,
	password: string,
	birthDate: string,
) => {
	try {
		const result = await axios.post('http://localhost:8000/subscribe', {
			lastName: lastName,
			firstName: firstName,
			login: login,
			password: password,
			birthDate: birthDate,
		});

		return {
			accessToken: result.data.accessToken,
			trainerId: result.data.trainerId,
			statusCode: result.status,
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return {
				statusCode: error?.response?.status,
				errorDetails: error?.response?.data.errorDetails,
			};
		}
		return { statusCode: 500, errorDetails: 'Internal server error' };
	}
};
