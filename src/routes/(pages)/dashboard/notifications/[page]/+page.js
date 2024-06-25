import { supabaseClient } from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load({ params, data }) {
    /* const user = data;
    console.log(JSON.stringify(user)); */
    const { page } = params;

    let { user } = data;
    /* console.log('locals', locals); */

    //TODO: check if page is a number - do type checking

    let { data: appointments, error } = await supabaseClient
        .from('appointment')
        .select(
            `
            id,
            created_at, address, phone_number, 
            services!service_id (
                name, price, description
            ),
            profiles!user_id (
                id,
                full_name
            )
        `
        )
        .eq('doctor_id', user.id)
        .eq('done', 'pending')
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
