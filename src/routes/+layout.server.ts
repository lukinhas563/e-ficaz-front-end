/** @type {import('./$types').PageLoad} */
export function load(event) {
	return {
		user: event.locals.user
	};
}
