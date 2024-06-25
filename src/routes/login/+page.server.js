import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, locals }) => {
        // Parse form data
        const formData = await request.formData();
        const body = Object.fromEntries(formData.entries());
        const { email, password } = body;

        // Validate email and password inputs
        if (!email || !password) {
            return fail(400, {
                error: 'Email and password are required'
            });
        }

        const { error } = await locals.sb.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            if (error instanceof AuthApiError && error.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password'
                });
            }
            return fail(500, {
                error: 'Server error, please try again later.'
            });
        }

        throw redirect(303, '/dashboard');
    }
};
