/** @type {import('@sveltejs/kit').RequestHandler} */

export const get = async ({locals}: any) => {

    const response = await locals.db.query("SELECT * FROM activity");
    return {
        body:{
            data: JSON.stringify(response[0])
        }
    }
}

export const post = async ({request,locals}: any ) => {
    const form = await request.formData();
    const body = {
        title: form.get('title'),
        description: form.get('description'),
        date: form.get('date')
    }
    console.log(body)
    const response = await locals.db.query("SELECT * FROM activity");
    return {
        body:{
            number: JSON.stringify(response[0])
        }
    }
}