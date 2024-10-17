package Command_Processor;

import domain.Model.Book;
import domain.service.BookService;

public class UpdateBookCommand extends Command {

    private Book book;

    public UpdateBookCommand(Book book, BookService bookService) {
        super(bookService);
        this.book = book;
    }

    @Override
    public void execute() {
        bookService.updateBook(book);
    }

}
