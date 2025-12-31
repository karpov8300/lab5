export class Author {
    #yearsActive;
    
    constructor(name = "", booksCount = 0, isAlive = true) {
        this._name = name;
        this._booksCount = booksCount;
        this._isAlive = isAlive;
        this.#yearsActive = 0;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === "string" && value.length > 0) {
            this._name = value;
        }
    }

    get booksCount() {
        return this._booksCount;
    }

    set booksCount(value) {
        if (typeof value === "number" && value >= 0) {
            this._booksCount = value;
        }
    }

    get isAlive() {
        return this._isAlive;
    }

    set isAlive(value) {
        if (typeof value === "boolean") {
            this._isAlive = value;
        }
    }

    #increaseExperience() {
        this.#yearsActive += 1;
        console.log(`Стаж увеличен: ${this.#yearsActive} лет`);
    }

    show() {
        console.log(`Автор: ${this._name}`);
        console.log(`Количество книг: ${this._booksCount}`);
        console.log(`Жив: ${this._isAlive}`);
        this.#increaseExperience();
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log("Экземпляр автора удален");
    }

    copy() {
        return this;
    }

    static clone(original) {
        if (original instanceof Author) {
            return new Author(original._name, original._booksCount, original._isAlive);
        }
        return new Author();
    }
}