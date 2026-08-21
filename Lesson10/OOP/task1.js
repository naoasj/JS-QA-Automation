import {Book} from "./book.js"
import {EBook} from "./eBook.js"

//1
const book1 = new Book ("Танець драконів", "Джордж Р. Р. Мартін", 2012)
const book2 = new Book ("Нова книга", "Невідомий автор", 2026)
book1.printInfo()
book2.printInfo()


//2
const eBook1 = new EBook ("Танець драконів", "Джордж Р. Р. Мартін", 2011, "онлайн")
const eBook2 = new EBook ("Бліч", "Кубо Тайто", 2001, "друк")
eBook1.printInfo()
eBook2.printInfo()

//3
try {
    const book3 = new Book ("Гаррі Поттер", "Роулінг", -2)
    book3.printInfo()
} catch (error) {
    console.log('Сталася помилка:', error.message);   
}

try {
    const book4 = new Book (2 , "Роулінг", 1995)
    book4.printInfo()
} catch (error) {
    console.log('Сталася помилка:', error.message);  
}

try {
    const book5 = new Book ("Томіе" , 1579, 2018)
    book5.printInfo()
} catch (error) {
    console.log('Сталася помилка:', error.message);  
}

try {
    const eBook3 = new EBook ("Бліч", "Кубо Тайто", 2001, "порваний")
    eBook3.printInfo()
} catch (error) {
    console.log('Сталася помилка:', error.message);  
}

//4
const booksArray = [book1, book2, eBook1, eBook2]
const oldestBook = Book.getOldestBook(booksArray);
console.log(`Найстаріша книга: ${oldestBook.name}`)


//5
const eBook4 = EBook.createFromBook(book1, "друк");
const eBook5 = EBook.createFromBook(book2, "онлайн");
eBook4.printInfo();
eBook5.printInfo();