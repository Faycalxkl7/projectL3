import '$lib/supabase';
import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const handle = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event);

    event.locals.sb = supabaseClient;
    event.locals.session = session;

    if (
        event.url.pathname.startsWith('/login') ||
        event.url.pathname.startsWith('/signup') ||
        event.url.pathname === '/'
    ) {
        if (session) {
            throw redirect(303, '/dashboard');
        }
    }
    if (event.url.pathname.startsWith('/dashboard')) {
        if (!session) {
            throw redirect(303, '/login');
        }
    }
    return resolve(event);
};
