// Source code is decompiled from a .class file using FernFlower decompiler.
import Command_Processor.BookController;
import domain.service.BookServiceImpl;
import persistence.BookJdbcImpl;
import presentation.BookManagementUI;

public class App {
   public App() {
   }

   public static void main(String[] var0) throws Exception {
      BookJdbcImpl var1 = BookJdbcImpl.makeBookJdbcImpl();
      BookServiceImpl var2 = new BookServiceImpl(var1);
      BookController var3 = BookController.makeBookController();
      new BookManagementUI(var3, var2);
   }
}
