import '$lib/supabase';
import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const handle = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event);

    event.locals.sb = supabaseClient;
    event.locals.session = session;

    let user;
    let role;

    if (session) {
        user = session.user;
        const { data, error } = await supabaseClient
            .from('profiles')
            .select('type')
            .eq('id', user.id);
        if (error) {
            console.error('error', error);
            return { status: 500, error: 'Internal Server Error' };
        }
        role = data[0].type;
    }

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

    if (
        event.url.pathname.startsWith('/dashboard') ||
        event.url.pathname.startsWith('/dashboard/doctor') ||
        event.url.pathname.startsWith('/dashboard/services') ||
        event.url.pathname.startsWith('/dashboard/messages') ||
        (event.url.pathname.startsWith('/dashboard/patients') &&
            (role === 'doctor' || role === 'client'))
    ) {
        throw redirect(303, '/dashboard/reservation');
    }
    return resolve(event);
};
