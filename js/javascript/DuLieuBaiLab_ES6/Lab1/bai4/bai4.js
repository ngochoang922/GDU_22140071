let users = [];
let editingIndex = -1;

document.getElementById("user-form").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nameElement = document.getElementById("name").value;
  const emailElement = document.getElementById("email").value;
  const ageElement = document.getElementById("age").value;
  const userList = document.getElementById("user-list");

  if (editingIndex === -1) {
    debugger
    // Tạo user mới
    const newUser = { nameElement, emailElement, ageElement };

    // Thêm user mới vào mảng users
    users.push(newUser);

    // Tạo li mới
    const li = document.createElement("li");
    li.innerHTML = `${nameElement} ${emailElement} ${ageElement}`;

    // Tạo các nút sửa và xóa
    const fixButton = document.createElement("button");
    fixButton.textContent = "Sửa";
    const removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";

    li.appendChild(fixButton);
    li.appendChild(removeButton);
    userList.appendChild(li);

    // Xử lý sự kiện cho nút xóa
    removeButton.addEventListener("click", () => {
      debugger
      const index = users.indexOf(newUser);
      if (index !== -1) {
        users.splice(index, 1); // Xóa khỏi mảng
        li.remove(); // Xóa li khỏi giao diện
      }
    });

    // Xử lý sự kiện cho nút sửa
    fixButton.addEventListener("click", () => {
      debugger
      document.getElementById("name").value = newUser.nameElement;
      document.getElementById("email").value = newUser.emailElement;
      document.getElementById("age").value = newUser.ageElement;
      editingIndex = users.indexOf(newUser);
    });
  } else {
    debugger
    // Cập nhật thông tin user đang chỉnh sửa
    const updatedUser = { nameElement, emailElement, ageElement };
    users[editingIndex] = updatedUser;

    // Cập nhật thông tin hiển thị của li
    const liItem = userList.getElementsByTagName("li")[editingIndex];
    liItem.innerHTML = `${nameElement} ${emailElement} ${ageElement}`;

    // Thêm lại các nút sửa và xóa sau khi cập nhật
    const fixButton = document.createElement("button");
    fixButton.textContent = "Sửa";
    const removeButton = document.createElement("button");
    removeButton.textContent = "Xóa";

    liItem.appendChild(fixButton);
    liItem.appendChild(removeButton);

    // Xử lý sự kiện click button xóa
    removeButton.addEventListener("click", () => {
      debugger
      users.splice(editingIndex, 1); // Xóa khỏi mảng
      liItem.remove(); // Xóa li khỏi giao diện
    });

    // Xử lý sự kiện click button sửa
    fixButton.addEventListener("click", () => {
      debugger
      document.getElementById("name").value = updatedUser.nameElement;
      document.getElementById("email").value = updatedUser.emailElement;
      document.getElementById("age").value = updatedUser.ageElement;

      editingIndex = users.indexOf(updatedUser);
    });

    // Đặt lại editingIndex sau khi sửa xong
    editingIndex = -1;
  }

  // Reset form
  document.getElementById("user-form").reset();
});