// thấy được from thông qua id
const formdk = document.getElementById('registrationForm');
//console.log(formdk);
//gawns tai nghe
formdk.addEventListener('submit',(event)=>{
    event.preventDefault();
//lam 
// lay duoc du lieu tren the input, thay duoc 
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message');
// thuc hien pt gui 
                    // sendL(name,email).then(resolve=>{
                    //     message.textContent=resolve;
                    //     message.style.color='blue';
                        
                    // }).catch(err=>{
                    //     message.textContent = err;
                    //     message.style.color ='red';
                    // });
const sendL1 = async = async(name,email)=>{
    try {
        const cv = await sendL(name,email);// resolve
        message.textContent=resolve;
        message.style.color='blue';
    } catch (error) {
        message.textContent = err;
        message.style.color ='red';
    }
}
sendL1(name,email);


}) //end
 // phuong thuc gui 
 const sendL= (name,email)=>{
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            const so = Math.random()>0.5;
            if (so) {
                resolve(`Gửi thành công ${name}-${email}`);
            }else{
                rejected(`gửi không thành công ${name}-${email}`)
            }
        },1000);
    })
 }