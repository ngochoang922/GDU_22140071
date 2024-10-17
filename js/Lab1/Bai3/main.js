const app=vue.createApp({
    data(){
        return{
            newtask:'',
            task:[],
        }
        
    },
    method:{
        ThemCV(){
            //kiem tra xem newtask phai co gia tri
            if (this.newtask!=="") {
                //gan lai cho mang
                this.tasks=[...this.tasks,this.newtask];// them

            }
            this.newtask='';
        }
    }
}).mount('#app');