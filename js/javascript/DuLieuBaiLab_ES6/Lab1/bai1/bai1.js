document.getElementById('registrationForm').addEventListener('submit',function(event){
    debugger
    event.preventDefault();// ngăn chuyển trang khi người dùng nhấn submit
    //truy suất thấy được thẻ input password
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mes = document.getElementById('message');
    if (password!==confirmPassword) {
        mes.textContent = "đăng nhập thất bại";

    }else{
        mes.textContent = "đăng nhập thành công";
        mes.style.color = "green";
    }
})