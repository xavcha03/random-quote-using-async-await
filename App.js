class App {
    constructor() {
        this.wrapper = document.querySelector(".quoteWrapper");
        this.QuoteApi = new QuoteApi('https://thatsthespir.it/api')
    }

    async main() {
        const quoteData = await this.QuoteApi.get();
        

        const quote = new Quote(quoteData);
     
        let Template = new QuoteTemplate(quote);

        this.wrapper.appendChild(Template.createQuoteTemplate());
           
    }
}

const app = new App()
app.main()
