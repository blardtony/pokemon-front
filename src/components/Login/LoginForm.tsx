import { useForm } from 'react-hook-form';
import type { LoginInputsType } from '../../types/auth.type';
import { login } from '../../services/auth.service';
import { useState } from 'react';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputsType>();
	const [error, setError] = useState<string | null>(null);

	const obSubmit = async (data: LoginInputsType) => {
		const { login: username, password } = data;
		const authResult = await login(username, password);
		console.log(authResult);
		if (authResult.errorDetails) {
			setError(authResult.errorDetails);
			return;
		}
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
			<label className="form-control w-full mb-8">
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
			{error && <div className="text-error mb-4">{error}</div>}
			<button className="btn btn-primary" type="submit">
				Log in
			</button>
		</form>
	);
};

export default LoginForm;
