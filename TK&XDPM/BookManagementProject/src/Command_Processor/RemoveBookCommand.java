package Command_Processor;

import domain.service.BookService;

public class RemoveBookCommand extends Command {

    private int id;

    public RemoveBookCommand(int id, BookService bookService) {
        super(bookService);
        this.id = id;
    }

    @Override
    public void execute() {
        bookService.removeBook(id);
    }

}
