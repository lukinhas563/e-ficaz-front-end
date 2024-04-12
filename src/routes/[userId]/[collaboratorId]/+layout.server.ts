/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, locals }) {
	const response = await fetch(
		`https://e-ficaz-api.onrender.com/collaborators/${params.collaboratorId}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${locals.user.token}`
			}
		}
	);

	const collaborator = await response.json();

	return {
		collaborator: collaborator.result
	};
}
