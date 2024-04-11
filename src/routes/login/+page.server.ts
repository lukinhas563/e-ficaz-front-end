import { redirect } from '@sveltejs/kit';
import { object, string } from 'yup';

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const data = await request.formData();

		let success = false;

		const username = data.get('username');
		const password = data.get('password');

		const userSchema = object({
			username: string().required().min(3),
			password: string().required().min(6)
		});

		try {
			await userSchema.validate(
				{
					username,
					password
				},
				{ abortEarly: false }
			);

			const response = await fetch('https://e-ficaz-api.onrender.com/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user_name: username,
					password_hash: password
				})
			});

			if (response.status === 200) {
				const data = await response.json();

				const ObjUser = {
					id: data.id,
					name: data.first_name,
					lastname: data.last_name,
					email: data.email,
					token: data.accessToken
				};

				cookies.set('user', JSON.stringify(ObjUser), { path: '/' });

				success = true;
			}
		} catch (error) {
			console.log(error);
			return {
				success: false,
				status: error.errors
			};
		}

		if (success) {
			redirect(301, '/');
		}
	}
};
