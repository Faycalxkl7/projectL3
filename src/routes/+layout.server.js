export const load = async ({ url, locals }) => {
    if (
        (url.pathname === '/login' || url.pathname === '/signup' || url.pathname === '/') &&
        locals.session
    ) {
        return { status: 303, redirect: '/dashboard' };
    }
};
