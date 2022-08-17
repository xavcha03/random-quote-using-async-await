class App {
    constructor() {

        this.quotes = new QuoteApi('https://thatsthespir.it/api')
    }

    async main() {
        const list = await this.quotes.get()

        console.log(list)
        

    }
}

const app = new App()
app.main()