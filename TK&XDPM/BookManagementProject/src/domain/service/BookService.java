package domain.service;

import java.util.List;

import domain.Model.Book;

public interface BookService {

    void addBook(Book book);

    Book findBookById(int id);

    List<Book> getAllBooks();

    void removeBook(int id);

    void updateBook(Book book);

    List<Book> findBookByName(String name);

    double calculateAverage();

    List<Book> findBookByPublisher(String publisher);

}
