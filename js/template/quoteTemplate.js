class QuoteTemplate{
    constructor(quote){
        this._quote = quote;
    }

    createQuoteTemplate(){
        let wrapper = document.createElement("section");
        wrapper.classList.add("quoteWrapper__");

        let quoteElt = `
            <p>${this._quote.quote}</p>

        `
        wrapper.innerHTML = quoteElt;

        if(this._quote.photo){
            let photoElt = `
            <img src="${this._quote.photo}" alt="${this._quote.author}"/>
            `

            wrapper.innerHTML += photoElt;
        }

        return wrapper;
    }

}