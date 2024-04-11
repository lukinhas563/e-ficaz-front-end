import { redirect } from '@sveltejs/kit';
import { object, string } from 'yup';

export const actions = {
	default: async ({ request }) => {
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

			success = true;
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
