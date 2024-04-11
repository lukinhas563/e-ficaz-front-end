import { redirect } from '@sveltejs/kit';
import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		let success = false;

		const username = data.get('username');
		const name = data.get('name');
		const lastname = data.get('lastname');
		const email = data.get('email');
		const password = data.get('password');

		const userSchema = object({
			username: string().required().min(3),
			name: string().required().min(3),
			lastname: string().required().min(3),
			email: string().email().required(),
			password: string().required().min(6)
		});

		try {
			await userSchema.validate(
				{
					username,
					name,
					lastname,
					email,
					password
				},
				{ abortEarly: false }
			);

			success = true;
		} catch (error) {
			return {
				success: false,
				status: error.errors
			};
		}

		if (success) {
			redirect(301, '/login');
		}
	}
};
