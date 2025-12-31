import { Author } from './Author.js';

export class ModernAuthor extends Author {
    constructor(name = "", booksCount = 0, isAlive = true, usesAI = false) {
        super(name, booksCount, isAlive);
        this._usesAI = usesAI;
    }

    get usesAI() {
        return this._usesAI;
    }

    set usesAI(value) {
        if (typeof value === "boolean") {
            this._usesAI = value;
        }
    }

    show() {
        console.log(`Современный автор: ${this._name}`);
        console.log(`Количество книг: ${this._booksCount}`);
        console.log(`Жив: ${this._isAlive}`);
        console.log(`Использует ИИ: ${this._usesAI}`);
    }

    delete() {
        Object.keys(this).forEach(key => {
            delete this[key];
        });
        console.log("Экземпляр современного автора удален");
    }

    copy() {
        const copyInstance = new ModernAuthor(this._name, this._booksCount, this._isAlive, this._usesAI);
        return copyInstance;
    }

    static clone(original) {
        if (original instanceof ModernAuthor) {
            return new ModernAuthor(original._name, original._booksCount, original._isAlive, original._usesAI);
        }
        return new ModernAuthor();
    }
}