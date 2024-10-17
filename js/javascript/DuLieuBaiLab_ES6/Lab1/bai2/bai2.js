document.addEventListener('DOMContentLoaded',()=>{
    let Object = {
        name: 'Hoàng Thiếu Em',
        age : 21,
        email : 'HoangThieuEm@gmail.com'

    };
    const ten = document.querySelector('.name');// truy suất tới class nên có dấu . nếu id thì là #
    const tuoi = document.querySelector('.age');
    const emails = document.querySelector('.email');
    // Đổ giữ liệu vào 
    let {name,age,email}= Object;
    ten.textContent=name;
    tuoi.textContent=age;
    emails.textContent=email;
})