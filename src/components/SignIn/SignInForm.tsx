import { useForm } from 'react-hook-form';
import type { SignInInputsType } from '../../types/auth.type';
import { subscribe } from '../../services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import { Theming } from '../Prime/Theming';

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInInputsType>();
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const obSubmit = async (data: SignInInputsType) => {
		const { login, password, lastName, firstName, birthDate } = data;
		const authResult = await subscribe(
			login,
			password,
			lastName,
			firstName,
			birthDate,
		);
		if (authResult.errorDetails) {
			setError(authResult.errorDetails);
			return;
		}
		navigate('/');
	};
	return (
		<form onSubmit={handleSubmit(obSubmit)}>
			<label className="form-control w-full mb-4">
				<div className="label">
					<span className="label-text">Email</span>
				</div>
				<input
					type="text"
					{...register('login', {
						required: 'Email is required',
						pattern: { value: /^\S+@\S+\.\S+/i, message: 'Invalid email' },
					})}
					placeholder="Email"
					className={`input input-bordered w-full ${errors.login ? 'input-error' : ''}`}
				/>
				{errors.login && (
					<div className="label">
						<span className="text-error">{errors.login.message}</span>
					</div>
				)}
			</label>
			<label className="form-control w-full mb-4">
				<div className="label">
					<span className="label-text">Password</span>
				</div>
				<input
					type="password"
					placeholder="Password"
					className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
					{...register('password', { required: 'Password is required' })}
				/>
				{errors.password && (
					<div className="label">
						<span className="text-error">{errors.password.message}</span>
					</div>
				)}
			</label>
			<label className="form-control w-full mb-4">
				<div className="label">
					<span className="label-text">Last name</span>
				</div>
				<input
					type="text"
					placeholder="Last name"
					className={`input input-bordered w-full ${errors.lastName ? 'input-error' : ''}`}
					{...register('lastName', { required: 'Last name is required' })}
				/>
				{errors.lastName && (
					<div className="label">
						<span className="text-error">{errors.lastName.message}</span>
					</div>
				)}
			</label>
			<label className="form-control w-full mb-4">
				<div className="label">
					<span className="label-text">First name</span>
				</div>
				<input
					type="text"
					placeholder="First name"
					className={`input input-bordered w-full ${errors.firstName ? 'input-error' : ''}`}
					{...register('firstName', { required: 'First name is required' })}
				/>
				{errors.firstName && (
					<div className="label">
						<span className="text-error">{errors.firstName.message}</span>
					</div>
				)}
			</label>
			{error && <div className="text-error mb-4">{error}</div>}
			<button className="btn btn-primary" type="submit">
				Sign in
			</button>
		</form>
	);
};

export default SignInForm;
