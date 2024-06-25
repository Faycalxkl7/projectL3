import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    signup: async ({ request, locals }) => {
        // Parse form data
        const formData = await request.formData();
        const body = Object.fromEntries(formData.entries());

        const { name, email, phone, departement, doctor, date, message } = body;

        if (!name || !email || !phone || !departement || !doctor || !date || !message) {
            return fail(400, { error: 'All fields are required' });
        }

        throw redirect(303, '/login');
    }
};
