package Command_Processor;

import observer.Publisher;

public class BookController extends Publisher {

    // Field
    private static BookController bookController = null;

    // Constructors
    private BookController() {
    }

    public static BookController makeBookController() {
        if (bookController == null) {
            bookController = new BookController();
        }
        return bookController;
    }

    // Method, Function
    public void processCommands(Command command) {
        command.execute();
        notifySubscribers();
    }
}
