document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const usernameInput = document.getElementById('username');
    const userList = document.getElementById('userList');
    const messageDiv = document.getElementById('message');

    let users = [];

    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        if (username) {
            await addUser(username);
            usernameInput.value = '';
            await fetchUsers();
        }
    });

    async function addUser(name) {
        try {
            // Simulate API call to add user
            await new Promise(resolve => setTimeout(resolve, 500));
            const newUser = { id: Date.now(), name };
            users.push(newUser);
            showMessage('Người dùng đã được thêm thành công', 'success');
        } catch (error) {
            showMessage('Lỗi khi thêm người dùng', 'error');
        }
    }

    async function fetchUsers() {
        try {
            // Simulate API call to fetch users
            await new Promise(resolve => setTimeout(resolve, 500));
            renderUsers(users);
        } catch (error) {
            showMessage('Lỗi khi tải danh sách người dùng', 'error');
        }
    }

    async function deleteUser(id) {
        try {
            // Simulate API call to delete user
            await new Promise(resolve => setTimeout(resolve, 500));
            users = users.filter(user => user.id !== id);
            await fetchUsers();
            showMessage('Người dùng đã được xóa thành công', 'success');
        } catch (error) {
            showMessage('Lỗi khi xóa người dùng', 'error');
        }
    }

    function renderUsers(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.className = 'user-item';
            li.innerHTML = `
                <span>${user.name}</span>
                <button class="delete-btn" data-id="${user.id}">Xóa</button>
            `;
            userList.appendChild(li);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const userId = parseInt(e.target.getAttribute('data-id'));
                await deleteUser(userId);
            });
        });
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = '';
        }, 3000);
    }

    // Initial fetch of users
    fetchUsers();
});