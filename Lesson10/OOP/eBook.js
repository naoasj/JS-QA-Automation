import {Book} from "./book.js"


export class EBook extends Book {
    constructor (name, autor, year, format) {
        super(name, autor, year)
        this.format = format
    }

    get format () {
        return this._format
    }
    set format (format) {
        if (format !== "онлайн" && format !== "друк") {
            throw new Error (" Такого формату не існує ")
        }
        this._format = format
    }

    static createFromBook(book, format) {
        return new EBook(book.name, book.autor, book.year, format);
    }

    printInfo() {
        console.log (`${this.name} написав ${this.autor} в ${this.year} році. ${this.name} є у ${this.format} форматі.`)
    }
}

