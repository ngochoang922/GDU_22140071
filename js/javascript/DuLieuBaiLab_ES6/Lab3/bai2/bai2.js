//b1: lấy dữ liệu về (promise) 
const getDL = () =>{
    return new Promise((resolve,rejected)=>{
        const user=[
            {name:"Trần Ngọc Hoàng",email:"hoangthieuem@gmail.com"},
            {name:"NGuyễn Lê Quốc Bảo",email:"nguyenlequocbao@gmail.com"},
        ];
        resolve(user);
    })
}
//b2: cần phải render cho người dùng thấy
const userList = document.getElementById('userList'); // ul
const renderUser = (user)=>{
    user.forEach(a => {
        //tạo li 
        const li = document.createElement('li');
        // tạo class cho li
        li.appendChild.add('user-item');
        // thêm vào li
        const {name,email}=a;
        li.innerHTML=`${name}-${email}<button>xoá</button>`;
        userList.appendChild(li);

        
    });
}
getDL().then(resolve =>{
    renderUser(resolve);
//sự kiện thêm
const formdk = document.getElementById('userForm');
formdk.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; 
    const message = document.getElementById('message');
})

//phương thức đồng bộ thêm
const addUser = async

//promise
   
   
})
