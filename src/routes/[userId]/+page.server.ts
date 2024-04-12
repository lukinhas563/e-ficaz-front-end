/** @type {import('./$types').PageLoad} */
export async function load({ fetch, locals }) {
	const response = await fetch('https://e-ficaz-api.onrender.com/collaborators', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${locals.user.token}`
		}
	});

	const collaborators = await response.json();

	return {
		collaborators: collaborators.result
	};
}
