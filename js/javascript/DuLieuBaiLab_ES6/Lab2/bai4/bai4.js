// document.addEventListener('DOMContentLoaded', () => {
//     const productList = document.getElementById('product-list');
//     const cartList = document.getElementById('cart-list');
//     const totalPrice = document.getElementById('total-price');
  
//     const products = [
//       { name: 'Nước Ép Cam', price: 30000 },
//       { name: 'Trà Sữa', price: 40000 },
//       { name: 'Cà Phê Đen', price: 20000 },
//       { name: 'Sinh Tố Bơ', price: 50000 }
//     ];
  
//     let cart = [];
  
//     const renderProducts = () => {
//       productList.innerHTML = products.map(product => `
//         <div class="product">
//           <span>${product.name} - ${product.price} VND</span>
//           <button onclick="addToCart('${product.name}')">Thêm</button>
//         </div>
//       `).join('');
//     };
  
//     const renderCart = () => {
//       cartList.innerHTML = cart.map(item => `
//         <div class="cart-item">
//           <span>${item.name} - ${item.price} VND - Số lượng: ${item.quantity}</span>
//           <button class="remove-btn" onclick="removeFromCart('${item.name}')">Xóa</button>
//         </div>
//       `).join('');
//       totalPrice.textContent = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//     };
  
//     window.addToCart = (productName) => {
//       const product = products.find(p => p.name === productName);
//       const cartItem = cart.find(item => item.name === productName);
      
//       if (cartItem) {
//         cartItem.quantity++;
//       } else {
//         cart.push({ ...product, quantity: 1 });
//       }
      
//       renderCart();
//     };
  
//     window.removeFromCart = (productName) => {
//       cart = cart.filter(item => item.name !== productName);
//       renderCart();
//     };
  
//     renderProducts();
//     renderCart();
//   });

const products = [
  { id: 1, name: 'Nước Ép Cam', price: 30000 },
  { id: 2, name: 'Trà Sữa', price: 40000 },
  { id: 3, name: 'Cà Phê Đen', price: 20000 },
  { id: 4, name: 'Sinh Tố Bơ', price: 50000 },
];
const productlist=document.getElementById('product-list');
// load tất cả sản phẩm
const renderProduct=()=>{
  products.forEach((gt,vitri)=>{
      // tạo div
      const div=document.createElement('div');
      // tạo class cho div
      div.classList.add('product');
      // tạo nội dung
      const {id,name,price}=gt;
      div.innerHTML=`<span>${name}</span>
                     <span>${price}</span>
                     <button onclick="addToCart(${id})">Thêm</button>`;
      // div con gắn div cha
      productlist.appendChild(div);
  })
}
// gọi pt
renderProduct();
// thêm vào trong giỏ hàng
const addToCart = (id)=>{
  //twf id timf ra dduwojc thoongn tin cua 1 san pham
  const infosp = products.find((p)=>p.id==id);
  /// tim xem trong gio hang co hay chua
  const inforpcard = cart.find((t)=>t.id==id);
  // nếu trong giỏ hàng có hàng rồi thì tăng số lượng lên
  if (inforpcard) {
    inforpcard.quantity+=1;
  } else {
    const spmoi ={ ...infosp,quantity:1};
    cart=[...cart,spmoi];
  }
  renderCart();
}
// viết hàm renderCart
const cartlist=document.getElementById('cart-list');
const renderCart = () => {
    cartlist.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        const{id,name,price,quantity}=item;
        div.innerHTML = `
            <span>${name}</span>
            <span>${price} VND</span>
            <span>Số lượng: ${quantity}</span>
            <button class="remove-btn" onclick="removeFromCart(${id})">Xóa</button>
        `;
        cartlist.appendChild(div);
    });
    // tính tổng hàng trong giỏ hàng
    const totalprice=document.getElementById('total-price');
    const tong=cart.reduce((total,item)=>total+item.price*item.quantity,0);
    totalprice.textContent=tong;
    
};
// phương thức xoá
const removeFromCart = (id)=>{
  cart = cart.filter(p=>p.id!==id);
  renderCart();
}