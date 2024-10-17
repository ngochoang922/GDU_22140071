document.addEventListener('DOMContentLoaded', () => {
    //phải có dữ liệu 
    const products = [
        { name: 'Cam', price: 10000 },
        { name: 'Táo', price: 20000 },
        { name: 'Bưởi', price: 15000 },
        { name: 'Dâu', price: 17000 },
        { name: 'Chuối', price: 19000 }

    ];
    //Thấy Ul
    const productList = document.getElementById('product-list');//ul
    const filterInput = document.getElementById('filter-price'); // thấy được thẻ input
    const sortbtn = document.getElementById('sort-btn');// thấy được nút 
    //render lên cho người dùng thấy
    const renderProduct = (productArray) => {
        debugger
        productList.innerHTML = '';

        //duyệt qua mảng để lấy 5 đối tượng ra , mỗi đối tượng nằm trong thẻ 
        // mang.forEach(ham)
        productArray.forEach((a) => {
            const li = document.createElement('li');
            //a trỏ {name:cam,price:10000}
            const { name, price } = a;
            li.innerHTML = `<span class ="product-name">${name}</span> 
        <span>${price}</span>`;
            productList.appendChild(li);
        })

    }
    //Phương Thức filter
    const filterProducts = () => {
        debugger
        //lấy được giá trị trên thẻ input
        const filterPrice = parseFloat(filterInput.value);// lấy được giá tiền trên thẻ input 
        // isNaN("aaaa")=> T, isNaN(2)=> F
        // mang.filter(ham)=> kết quả trả về là mảng
        const filterProductList = 
        isNaN(filterPrice) ? products : products.filter((a) => a.price <= filterPrice);
        return filterProductList;
    }
    // Event listeners
    filterInput.addEventListener('input',()=>{
        renderProduct(filterProducts());
    });
    let isAcending = true;
    //Phước Thức sắp xếp 
    //mang.sort(ham(2thamso này là 2 object))=> mảng
    const sortList = (productArray)=>{
        return productArray.sort((a,b)=>isAcending?a.price-b.price:b.price-a.price);
    }
    //gọi hàm sortlist khi người dùng nhấn vào sắp xếp , ai lắng nghe => nút 
    sortbtn.addEventListener('click',()=>{
        isAcending=!isAcending;
        renderProduct(sortList(filterProducts()));
        sortbtn.textContent = isAcending? "sắp xếp giảm dần":"sắp xếp tăng dần";
    })

    //lời gọi hàm
    renderProduct(products);

})