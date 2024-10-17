package Command_Processor;

import domain.service.BookService;

public class CalculateAverageCommand extends Command {

    private double result;

    public CalculateAverageCommand(BookService bookService) {
        super(bookService);
    }

    @Override
    public void execute() {
        result = bookService.calculateAverage();
    }

    public double getResult() {
        return result;
    }
}
