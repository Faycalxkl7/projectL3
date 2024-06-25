import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    signup: async ({ request, locals }) => {
        // Parse form data
        const formData = await request.formData();
        const body = Object.fromEntries(formData.entries());

        // Type checking and validation
        const { name, age, email, password } = body;
        if (!name || !age || !email || !password) {
            return fail(400, { error: 'All fields are required' });
        }

        // Validation
        if (name.length < 2) {
            return fail(400, { error: 'Name must be at least 2 characters long.' });
        }
        if (isNaN(age)) {
            return fail(400, { error: 'Age must be a number.' });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return fail(400, { error: 'Invalid email address.' });
        }
        if (password.length < 8) {
            return fail(400, { error: 'Password must be at least 6 characters long.' });
        }

        const { error } = await locals.sb.auth.signUp({
            email,
            password,
            options: {
                data: { age, name }
            }
        });

        if (error) {
            if (error instanceof AuthApiError) {
                return fail(400, { error: error.message });
            } else {
                return fail(500, { error: 'An error occurred while signing up' });
            }
        }

        throw redirect(303, '/login');
    }
};

/* function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} */
