class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => {res.data
            console.log(res)
            })
            .catch(err => console.log('an error occurs', err))
    }
}


class QuoteApi extends Api {
    constructor(url) {
        super(url)
    }

    async getQuote() {
        return await this.get()
    }
}