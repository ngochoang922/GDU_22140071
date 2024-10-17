package Command_Processor;

import domain.service.BookService;

public class FindBookCommand extends Command {

    private int bookId;

    public FindBookCommand(int bookId, BookService bookService) {
        super(bookService);
        this.bookService = bookService;
        this.bookId = bookId;
    }

    @Override
    public void execute() {
        bookService.findBookById(bookId);
    }

}
