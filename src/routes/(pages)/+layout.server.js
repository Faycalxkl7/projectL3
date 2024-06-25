import { redirect } from '@sveltejs/kit';
import { supabaseClient } from '$lib/supabase';

export const load = async ({ locals }) => {
    if (!locals.session) {
        throw redirect(303, '/');
        return;
    }

    const { user } = locals.session;
    const { data, error } = await supabaseClient.from('profiles').select('type').eq('id', user.id);
    if (error) {
        console.error('error', error);
        return { status: 500, error: 'Internal Server Error' };
    }

    console.log(data);

    return {
        role: data[0].type
    };
};
