import { supabaseClient } from '$lib/supabase';

/** @type {import('./$types').PageLoad} */
export async function load({ params, locals }) {
    const { page } = params;

    let { user } = locals.session;
    /* console.log('locals', locals); */

    //TODO: check if page is a number - do type checking

    const totalItems = 2;

    let {
        data: appointments,
        count,
        error
    } = await supabaseClient
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
        `,
            { count: 'exact' }
        )
        .eq('doctor_id', user.id)
        .eq('done', 'accepted')
        .range((page - 1) * totalItems, page * totalItems - 1);

    if (error) {
        console.error('error', error);
        return { status: 500, error: 'Internal Server Error' };
    }

    if (!appointments.length) {
        return { status: 404, error: 'Not Found' };
    }

    return {
        appointments,
        count,
        totalItems
    };
}
