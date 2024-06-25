import { supabaseClient } from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load({ params, locals }) {
    const { page } = params;

    let { user } = locals.session;
    /* console.log('locals', locals); */

    //TODO: check if page is a number - do type checking

    let { data: appointments, error } = await supabaseClient
        .from('appointment')
        .select(
            `
            created_at, address, phone_number, 
            services!service_id (
                name, price, description
            ),
            profiles!user_id (
                full_name
            )
        `
        )
        .eq('doctor_id', user.id)
        .range((page - 1) * 10, page * 10 - 1);

    if (error) {
        console.error('error', error);
        return { status: 500, error: 'Internal Server Error' };
    }

    if (!appointments.length) {
        return { status: 404, error: 'Not Found' };
    }

    return {
        appointments
    };
}
