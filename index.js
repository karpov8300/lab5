import { ModernAuthor } from './ModernAuthor.js';

const authors = [
    new ModernAuthor("Алексей Иванов", 15, true, true),
    new ModernAuthor("Мария Петрова", 8, true, false)
];

authors.forEach(author => {
    author.show();
    console.log("---");
});