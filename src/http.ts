export class Http {
    static HEADERS = {'Content-Type': 'application/json'}

    static async get(url: string) {
        try {
            return await request(url, 'GET')
        } catch (e) {
            console.log('Get error', e)
            throw e
        }
    }

    static async post(url: string, data = {}) {
        try {
            return await request(url, 'POST', data)
        } catch (e) {
            console.log('Post error', e)
            throw e
        }
    }

    static async delete(url: string) {
        try {
            return await request(url, 'DELETE')
        } catch (e) {
            console.log('Delete error', e)
            throw e
        }
    }

    static async patch(url: string, data = {}) {
        try {
            return await request(url, 'PATCH', data)
        } catch (e) {
            console.log('Patch error', e)
            throw e
        }
    }
}

async function request(url: any, method: string = 'GET', data?: Object) {

    const config: RequestInit = {
        method,
        headers: Http.HEADERS
    }

    if (method === 'POST' || 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const response = await fetch(url, config)

    return await response.json()
}

