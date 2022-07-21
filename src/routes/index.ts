/** @type {import('@sveltejs/kit').RequestHandler} */

export const get = async ({locals}: any) => {

    const response = await locals.db.query("SELECT * FROM activity");
    return {
        body:{
            activity: response[0]
        }
    }
}

export const post = async ({request,locals}: any ) => {
    const form = await request.formData();
    const formateString = new Date(form.get('date')).toISOString();
    const body = {
        title: form.get('title'),
        description: form.get('description'),
        date: formateString,
        color: form.get('color'),
        start_date: formateString
    }
    try {
        const response = await locals.db.query("INSERT INTO activity SET ?", body , function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
    }
    catch (err) {
        console.log(err)
    }
    return "hej"
}