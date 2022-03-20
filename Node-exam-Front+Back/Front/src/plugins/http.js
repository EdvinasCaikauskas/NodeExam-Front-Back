const host = 'http://localhost:4000'

export default {
    post: async (data, url) => {
        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }

        let res = await fetch (host+url, options)
        res = await res.json()

        return res
    },
    get: async (url) => {
        let res = await fetch(host+url)
        res = await res.json()

        return res
    }
}