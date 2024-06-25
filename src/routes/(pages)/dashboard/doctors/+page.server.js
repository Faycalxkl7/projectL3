import { AuthApiError } from '@supabase/supabase-js';

import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    add: async ({ request, locals }) => {
        // Parse form data
        const formData = await request.formData();
        const body = Object.fromEntries(formData.entries());
        const {
            name,
            Specialty,
            email,
            Username,
            password,
            phone_number,
            sex,
            address,
            sunday_start,
            sunday_end,
            monday_start,
            monday_end,
            tuesday_start,
            tuesday_end,
            wednesday_start,
            wednesday_end,
            thursday_start,
            thursday_end,
            friday_start,
            friday_end,
            saturday_start,
            saturday_end
        } = body;
        // Step 1: Sign up the user
        const { error } = await locals.sb.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name,
                    specialty: Specialty,
                    username: Username,
                    phone: phone_number,
                    sexe: sex,
                    address: address,
                    type: 'doctor'
                }
            }
        });

        if (error) {
            if (error instanceof AuthApiError) {
                return fail(400, { error: error.message });
            } else {
                return fail(500, { error: 'An error occurred while signing up' });
            }
        }

        console.log(JSON.stringify(body));
    }
};
