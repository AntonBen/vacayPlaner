/** @type {import('@sveltejs/kit').RequestHandler} */

export const get = async ({locals}: any) => {
    console.log(locals)

    const response = await locals.db.query("SELECT * FROM drink");
    return {
        body:{
            number: JSON.stringify(response[0])
        }
    }
}