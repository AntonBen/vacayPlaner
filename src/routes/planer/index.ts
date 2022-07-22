/** @type {import('@sveltejs/kit').RequestHandler} */

import type { MysqlError } from "mysql";

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
    const formateString = new Date(form.get('date')).toISOString();
    const body = {
        title: form.get('title'),
        description: form.get('description'),
        date: formateString,
        color: form.get('color'),
        start_date: formateString
    }
    try {
        const response = await locals.db.query("INSERT INTO activity SET ?", body , function (err:MysqlError) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        return response
    }
    catch (err) {
        console.log(err)
    }
    return "hej"
}

export const put = async ({request,locals}:any) => {
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
        const response = await locals.db.query('UPDATE activity SET ? WHERE id = ?', [ body, form.get('id')], function (err:MysqlError) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        return response 
    }
    catch (err) {
        console.error(err)
    }
}