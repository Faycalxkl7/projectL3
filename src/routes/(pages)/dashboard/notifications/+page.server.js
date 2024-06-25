import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
    throw redirect(302, '/dashboard/notifications/1');
}
