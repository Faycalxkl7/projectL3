/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
    console.log('my ass');

    let { user } = locals.session;

    return {
        user
    };
}
