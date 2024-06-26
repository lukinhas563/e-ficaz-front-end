import { redirect } from '@sveltejs/kit';

const public_paths = ['/login', '/register', '/'];

function isPathAllowed(path: string) {
	return public_paths.some(
		(allowedPath) => path === allowedPath || path.startsWith(allowedPath + '/')
	);
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const getUser = event.cookies.get('user');

	if (!getUser && !isPathAllowed(event.url.pathname)) {
		throw redirect(302, '/register');
	}

	if (getUser) {
		const newUser = JSON.parse(getUser);

		event.locals.user = newUser;
	}

	const response = await resolve(event);
	return response;
}
