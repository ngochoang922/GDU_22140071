package persistence;

import java.util.List;

import domain.Model.Book;

public interface BookJdbc {
    void addBook(Book book);

    Book getBookById(int id);

    List<Book> getAllBooks();

    void updateBook(Book book);

    void removeBook(int id);

    List<Book> findBooksByName(String name);

    double calculateAverage();

    List<Book> findBooksByPublisher(String search);
}
