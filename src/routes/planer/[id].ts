import type { RequestHandler } from "@sveltejs/kit"

export const del:RequestHandler = async ({request, locals, params}) => {
    try {
        const responde = await locals.db.query(`DELETE FROM activity WHERE id = ${params.id}`)
        return responde;
    }
    catch (e) {
        console.log(e)
        return {}
    }
}