class Quote{
    constructor(quote){
        this.quote = quote.quote;
        this.author = quote.author;
        this.id = quote.id;
        this.permalink = quote.permalink;
        this.photo = quote.photo;
        this.gender = quote.gender;
        this.slug = quote.slug;
        this.totalQuotes = quote.totalQuotes;
    }

    get quote(){
        return this.quote;
    }

    get author(){
        return this.author;
    }
    get id(){
        return this.id;
    }
    get permalink(){
        return this.permalink;
    }
    get photo(){
        return this.photo;
    }
    get gender(){
        return this.gender;
    }
    get slug(){
        return this.slug;
    }
}