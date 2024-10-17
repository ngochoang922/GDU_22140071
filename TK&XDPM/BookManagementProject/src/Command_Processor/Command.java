package Command_Processor;

import domain.service.BookService;

public abstract class Command {
    protected BookService bookService;

    public Command(BookService bookService) {
        this.bookService = bookService;
    }

    public abstract void execute();
}
