document.addEventListener('DOMContentLoaded',()=>{
    // khai báo mảng 5 đối tượng 
    const products = [
        {name:'Trà Xanh', price:'25,000 VNĐ', description:'vị trà xanh như tiểu tam'},
        {name:'Trà olong dâu mai sơn', price:'20,000 VNĐ',description:'vị dâu thơm, mát'},
        {name:'Trà đào', price:'15,000 VNĐ',description:'vị đào thơm từng giọt '},
        {name:'Trà đá', price:'5,000 VNĐ',description:'vị đá giòn tan khó cưỡng '},
        {name:'Trà táo', price:'20,000 VNĐ',description:'vị táo thơm, mát'}
    ];
    const productList=document.getElementById('product-list'); //thấy được ul
    const nameElement=document.querySelector('.name');
    const priceElement=document.querySelector('.price');
    const descriptionElement=document.querySelector('.description');
    //mang.forEach(hàm)
    products.forEach((product, index) => {
        //tạo li
        const li = document.createElement('li');//tạo thẻ <li></li>
        //gắn nội dung vào li
        let {name} = product;
        li.textContent = name;
        // gắn li vào ul 
        productList.appendChild(li);
        // click vào li sẽ ra thông tin chi tiết sản phẩm 
        li.addEventListener('click', () => {
        // lấy thông tin khi người dùng click vào 
        let {name, price, description} = products[index];
            nameElement.innerHTML = name;
            priceElement.innerHTML = price;
            descriptionElement.innerHTML = description;
        })
    })
})