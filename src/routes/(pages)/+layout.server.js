export const load = async ({ locals }) => {
    if (!locals.session) {
        return { status: 303, redirect: '/' };
    }
};
