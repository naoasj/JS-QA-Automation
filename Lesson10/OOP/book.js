export class Book {
    constructor (name, autor, year) {
        this.name = name
        this.autor = autor
        this.year = year
    }

    get name () {
        return this._name
    }
    set name (name) {
        if (typeof name !== "string") {
            throw new Error (" Назва має бути рядком ")
        }
        this._name = name
    }

    get year () {
        return this._year
    }
    set year (year) {
        if (year < 0) {
            throw new Error (" Рік менше нуля ")
        }
        this._year = year
    }

    get autor () {
        return this._autor
    }
    set autor (autor) {
        if (typeof autor !== "string") {
            throw new Error (" Імя автора не може бути числом ")
        }
        this._autor = autor
    }

    static getOldestBook(books) {
        const sorted = [...books].sort((a, b) => a.year - b.year);
        return sorted[0]
    }

    printInfo() {
        console.log (`${this.name} написав ${this.autor} в ${this.year} році`)
    }
}


