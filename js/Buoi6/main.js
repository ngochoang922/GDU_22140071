// tạo đối tượng vue
const app=Vue.createApp({
    // thuộc tính
    data(){
        return{
            img:'green-shirt.jpg',
            ghichu:"Hình áo",
            ten:"An",
            tuoi:20,
            rawHTML:'<span style="color:red">Đây là màu đỏ</span>',
            count:20,
            ok:false,
            name:'',
            instock:true,
            onsale:false,
            items:[
                {id:1,mes:'Food'},
                {id:2,mes:'Bar'},
                {id:3,mes:'Drink'},
            ]
        }
    },
    // phương thức
    methods:{
        dosomething()
        {
            alert("Làm mọi thứ")
        },
        alertHello()
        {
            alert("Xin chào")
        },
        alertWelcome()
        {
            alert("welcome")
        },
        ptphim()
        {
            alert("đây là enter")
        }
    }
}).mount("#app")