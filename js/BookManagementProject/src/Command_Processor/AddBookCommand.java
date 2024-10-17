package Command_Processor;

import domain.Model.Book;
import domain.Model.TextBook;
import domain.service.BookService;

public class AddBookCommand extends Command {

    private Book book;

    public AddBookCommand(Book book, BookService bookService) {
        super(bookService);
        if (book instanceof TextBook) {
            TextBook textBook = (TextBook) book;
            this.book = textBook;
        } else {
            this.book = book;
        }
    }

    @Override
    public void execute() {
        bookService.addBook(book);
    }
}
