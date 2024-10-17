//Tạo đối tượng vue
const app = Vue.createApp({
    // thuộc tính 
    data(){
        return{
            img:''
            ten:"An",
            tuoi:20,
            rawHTML:'<span style ="color: red >" Đây là màu đỏ </span>',
        }
    },
    //phương thức 
    // method:{
        
    // }
}).mount("#app")