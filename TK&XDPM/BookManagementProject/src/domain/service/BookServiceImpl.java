package domain.service;

import java.util.List;

import domain.Model.Book;
import persistence.BookJdbc;

public class BookServiceImpl implements BookService {

    private BookJdbc bookJdbc;

    public BookServiceImpl(BookJdbc bookJdbc) {
        this.bookJdbc = bookJdbc;
    }

    @Override
    public void addBook(Book book) {
        bookJdbc.addBook(book);
    }

    @Override
    public Book findBookById(int id) {
        return bookJdbc.getBookById(id);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookJdbc.getAllBooks();
    }

    @Override
    public void removeBook(int id) {
        bookJdbc.removeBook(id);
    }

    @Override
    public void updateBook(Book book) {
        bookJdbc.updateBook(book);
    }

    @Override
    public List<Book> findBookByName(String name) {
        return bookJdbc.findBooksByName(name);
    }

    @Override
    public double calculateAverage() {
        return bookJdbc.calculateAverage();
    }

    @Override
    public List<Book> findBookByPublisher(String publisher) {
        return bookJdbc.findBooksByPublisher(publisher);
    }

}
