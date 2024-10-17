//muốn gắn tai nghe cho đối tượng button, thì phải thấy được nó 
const btn = document.getElementById('calculate-btn');
btn.addEventListener('click',()=>{
    //nghe và làm
    // lấy giá trị của những thẻ input num1, input num2
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    ketqua = document.getElementById('result');
    // tính tổng 
    const sum = (a,b) => a+b;
    ketqua.textContent = `Tổng là: ${sum(num1,num2)}`;
})