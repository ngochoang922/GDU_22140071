import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

public class ManagerStore extends JFrame {
    private JTextField txtID, txtName, txtEntryDate, txtUnitPrice, txtQuantity, txtProvider, txtWarranty, txtPower;
    private JComboBox<String> cmbCategory;
    private JTable tblProducts;
    private DefaultTableModel tableModel;

    public ManagerStore() {
        // Thiết lập JFrame
        setTitle("Quản Lý Sản Phẩm Siêu Thị");
        setSize(1000, 800);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Tạo panel chính
        JPanel formPanel = new JPanel(new GridLayout(15, 15, 10, 10));
        JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 20, 10));

        // Tạo các label và text field
        JLabel lblID = new JLabel("Mã Hàng:");
        JLabel lblName = new JLabel("Tên Hàng:");
        JLabel lblEntryDate = new JLabel("Ngày Nhập:");
        JLabel lblUnitPrice = new JLabel("Đơn Giá:");
        JLabel lblQuantity = new JLabel("Số Lượng:");
        JLabel lblProvider = new JLabel("Nhà Cung Cấp:");
        JLabel lblWarranty = new JLabel("Bảo Hành (tháng):");
        JLabel lblPower = new JLabel("Công Suất (KW):");
        JLabel lblCategory = new JLabel("Loại Hàng:");
        JLabel lblProductionDate = new JLabel("Ngày Sản Xuất:");
        JLabel lblExpiryDate = new JLabel("Ngày Hết Hạn:");
        JLabel lblProducer = new JLabel("Nhà Sản Xuất:");
        JLabel lblEntryWarehouseDate = new JLabel("Ngày Nhập Kho:");

        txtID = new JTextField();
        txtName = new JTextField();
        txtEntryDate = new JTextField();
        txtUnitPrice = new JTextField();
        txtQuantity = new JTextField();
        txtProvider = new JTextField();
        txtWarranty = new JTextField();
        txtPower = new JTextField(); // Trường Công Suất
        JTextField txtProductionDate = new JTextField(); // Trường Ngày Sản Xuất
        JTextField txtExpiryDate = new JTextField(); // Trường Ngày Hết Hạn
        JTextField txtProducer = new JTextField();
        JTextField txtEntryWarehouseDate = new JTextField();

        cmbCategory = new JComboBox<>(new String[]{"Thực Phẩm", "Điện Máy", "Sành Sứ"});
        
        // Tạo bảng dữ liệu
        String[] columnNames = {"ID", "Tên Hàng", "Ngày Nhập", "Đơn Giá", "Số Lượng", "Nhà Cung Cấp", "Loại Hàng", "Bảo Hành", "Công Suất", "VAT", "Tổng Giá"};
        tableModel = new DefaultTableModel(columnNames, 0);
        tblProducts = new JTable(tableModel);
        JScrollPane scrollPane = new JScrollPane(tblProducts);

        // Thêm sự kiện lắng nghe cho ComboBox
        cmbCategory.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String selectedCategory = (String) cmbCategory.getSelectedItem();

                // Hiển thị hoặc ẩn các trường dựa trên lựa chọn
                if ("Thực Phẩm".equals(selectedCategory)) {
                    lblProductionDate.setVisible(true);
                    txtProductionDate.setVisible(true);
                    lblExpiryDate.setVisible(true);
                    txtExpiryDate.setVisible(true);
                    lblProvider.setVisible(true);
                    txtProvider.setVisible(true);
                    lblPower.setVisible(false);
                    txtPower.setVisible(false);
                    lblProducer.setVisible(false); // Ẩn Nhà Sản Xuất
                    txtProducer.setVisible(false);
                    lblWarranty.setVisible(false);
                    txtWarranty.setVisible(false); // Ẩn bảo hành
                    lblEntryWarehouseDate.setVisible(false); // Ẩn Ngày Nhập Kho
                    txtEntryWarehouseDate.setVisible(false);
                } else if ("Điện Máy".equals(selectedCategory)) {
                    lblPower.setVisible(true);
                    txtPower.setVisible(true);
                    lblProductionDate.setVisible(false);
                    txtProductionDate.setVisible(false);
                    lblExpiryDate.setVisible(false);
                    txtExpiryDate.setVisible(false);
                    lblProvider.setVisible(false);
                    txtProvider.setVisible(false);
                    lblProducer.setVisible(false); // Ẩn Nhà Sản Xuất
                    txtProducer.setVisible(false);
                    lblWarranty.setVisible(true);
                    txtWarranty.setVisible(true); 
                    lblEntryWarehouseDate.setVisible(false); // Ẩn Ngày Nhập Kho
                    txtEntryWarehouseDate.setVisible(false);
                } else { // "Sành Sứ"
                    lblPower.setVisible(false);
                    txtPower.setVisible(false);
                    lblProductionDate.setVisible(false);
                    txtProductionDate.setVisible(false);
                    lblExpiryDate.setVisible(false);
                    txtExpiryDate.setVisible(false);
                    lblProvider.setVisible(true);
                    txtProvider.setVisible(true);
                    lblProducer.setVisible(true); // Hiện Nhà Sản Xuất
                    txtProducer.setVisible(true);
                    lblWarranty.setVisible(false);
                    txtWarranty.setVisible(false); // Ẩn bảo hành
                    lblEntryWarehouseDate.setVisible(true); // Hiện Ngày Nhập Kho
                    txtEntryWarehouseDate.setVisible(true);
                }

                // Cập nhật các cột trong bảng theo loại hàng
                updateTableColumns(selectedCategory);
            }
        });

        // Thêm các thành phần vào formPanel
        formPanel.add(lblID); formPanel.add(txtID);
        formPanel.add(lblName); formPanel.add(txtName);
        formPanel.add(lblEntryDate); formPanel.add(txtEntryDate);
        formPanel.add(lblUnitPrice); formPanel.add(txtUnitPrice);
        formPanel.add(lblQuantity); formPanel.add(txtQuantity);
        formPanel.add(lblCategory); formPanel.add(cmbCategory);
        formPanel.add(lblProductionDate); formPanel.add(txtProductionDate); // Ngày Sản Xuất
        formPanel.add(lblExpiryDate); formPanel.add(txtExpiryDate); // Ngày Hết Hạn
        formPanel.add(lblProvider); formPanel.add(txtProvider);
        formPanel.add(lblWarranty); formPanel.add(txtWarranty);
        formPanel.add(lblPower); formPanel.add(txtPower); // Công suất
        formPanel.add(lblProducer); formPanel.add(txtProducer); // Nhà Sản Xuất
        formPanel.add(lblEntryWarehouseDate); formPanel.add(txtEntryWarehouseDate); // Ngày Nhập Kho

        // Ẩn các trường không cần thiết ban đầu
        lblProducer.setVisible(false);
        txtProducer.setVisible(false);
        lblEntryWarehouseDate.setVisible(false);
        txtEntryWarehouseDate.setVisible(false);
        lblProductionDate.setVisible(false);
        txtProductionDate.setVisible(false);
        lblExpiryDate.setVisible(false);
        txtExpiryDate.setVisible(false);
        lblPower.setVisible(false);
        txtPower.setVisible(false);

        // Thêm các nút vào buttonPanel
        buttonPanel.add(new JButton("Tìm theo Mã"));
        buttonPanel.add(new JButton("Thêm"));
        buttonPanel.add(new JButton("Xóa"));
        buttonPanel.add(new JButton("Sửa"));
        buttonPanel.add(new JButton("Tìm Hàng Sắp Hết Hạn"));
        buttonPanel.add(new JButton("Tổng Số Lượng"));

        // Thêm các panel vào JFrame
        add(formPanel, BorderLayout.NORTH);
        add(scrollPane, BorderLayout.CENTER);
        add(buttonPanel, BorderLayout.SOUTH);
    }

    // Hàm updateTableColumns sẽ được thêm ở đây
    private void updateTableColumns(String category) {
        // Xóa các cột hiện tại
        tableModel.setColumnCount(0);

        // Cấu trúc lại các cột dựa trên loại hàng
        if ("Thực Phẩm".equals(category)) {
            tableModel.setColumnIdentifiers(new String[]{
                "ID", "Tên Hàng", "Ngày Nhập", "Đơn Giá", "Số Lượng", 
                "Nhà Cung Cấp", "Loại Hàng", "Ngày Sản Xuất", "Ngày Hết Hạn", "VAT", "Tổng Giá"
            });
        } else if ("Điện Máy".equals(category)) {
            tableModel.setColumnIdentifiers(new String[]{
                "ID", "Tên Hàng", "Ngày Nhập", "Đơn Giá", "Số Lượng", 
                "Nhà Cung Cấp", "Loại Hàng", "Bảo Hành", "Công Suất", "VAT", "Tổng Giá"
            });
        } else { // "Sành Sứ"
            tableModel.setColumnIdentifiers(new String[]{
                "ID", "Tên Hàng", "Ngày Nhập", "Đơn Giá", "Số Lượng", 
                "Nhà Cung Cấp", "Loại Hàng", "Nhà Sản Xuất", "Ngày Nhập Kho", "VAT", "Tổng Giá"
            });
        }
    }
}
