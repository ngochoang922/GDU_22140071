// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('task-input');
//     const addBtn = document.getElementById('add-btn');
//     const taskList = document.getElementById('task-list');
  
//     const renderTasks = () => {
//         taskList.innerHTML = '';
//         const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         tasks.forEach((task, index) => {
//           const li = document.createElement('li');
//           li.innerHTML = `
//             <span class="task-name ${task.completed ? 'completed' : ''}">${task.name}</span>
//             <button class="complete-btn" onclick="toggleComplete(${index})">Hoàn thành</button>
//             <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>
//           `;
//           taskList.appendChild(li);
//         });
//       };
  
//       addBtn.onclick = () => {
//         const taskName = taskInput.value.trim();
//         if (taskName) {
//           const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//           tasks.push({ name: taskName, completed: false });
//           localStorage.setItem('tasks', JSON.stringify(tasks));
//           taskInput.value = '';
//           renderTasks();
//         }
//       };
  
//       window.toggleComplete = (index) => {
//         const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         tasks[index].completed = !tasks[index].completed;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         renderTasks();
//       };
  
//       window.deleteTask = (index) => {
//         const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         tasks.splice(index, 1);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         renderTasks();
//       };
  
//     renderTasks();
//   });

// thấy được nút button
const thembtn=document.getElementById('add-btn');
const taskinput=document.getElementById('task-input');
const tasklist=document.getElementById('task-list');
// gắn tai nghe cho nút button
// khai báo mảng task
let tasks=[];
thembtn.addEventListener('click',()=>{
    // làm là thêm dữ liệu vào mảng
    const taskname=taskinput.value.trim();//loại bỏ những khoảng vô nghĩa
    // cần thêm đối tượng vào trong tasks, đối tượng này có 2 thuộc tính
    const newtask={name:taskname,completed:false};
    // thêm vào trong mảng
    tasks=[...tasks,newtask];
    taskinput.value='';
    // sau khi thêm vào mảng thì phải hiển thị cho người dùng thấy
    renderTasks();
})// endadd
// phương thứ hiển thị
const renderTasks=()=>{
    tasklist.innerHTML='';
    tasks.forEach((gt,vitri)=>{
        // tạo nút li
        const li=document.createElement('li');
        // tạo thẻ span
        const span=document.createElement('span');
        // tạo class cho span
        span.classList.add('task-name');
        const{name,completed}=gt;
        // nếu mà thuộc tính completed có giá trị true thì class được thêm vào completed
        if(completed)
        {
            span.classList.add('completed');
        }
        // tạo nội dung cho span
        
        span.textContent=name;
        // vì span nằm trong li nên li append
        li.appendChild(span);
        // tạo nút hoàn thành
        const completeBtn=document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent="Hoàn Thành";
        completeBtn.onclick=()=>{
            console.log(vitri);
            tasks=tasks.map((p,i)=>i===vitri?{...p,completed:!p.completed}:p);
            renderTasks();
        }
        li.appendChild(completeBtn);
        // tạo nút xóa
        const deleteBtn=document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent="Xóa";
        deleteBtn.onclick=()=>{
            tasks=tasks.filter((_,i)=>i!==vitri);
            renderTasks();
        }
        li.appendChild(deleteBtn);
        // đem li add vào ul
        tasklist.appendChild(li);
    })
}
