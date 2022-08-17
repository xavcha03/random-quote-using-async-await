class Quote{
    constructor(data){
        this._quote = data.quote;
        this._author = data.author;
        this._id = data.id;
        this._permalink = data.permalink;
        this._photo = data.photo;
        this._gender = data.gender;
        this._slug = data.slug;
        this._totalQuotes = data.totalQuotes;
    }

    get quote(){
        return this._quote;
    }

    get author(){
        return this._author;
    }
    get id(){
        return this._id;
    }
    get permalink(){
        return this.permalink;
    }
    get photo(){
        return this._photo;
    }
    get gender(){
        return this._gender;
    }
    get slug(){
        return this._slug;
    }
}