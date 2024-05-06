let numbs = document.querySelectorAll(".numbs")
let takemoney = document.getElementById("takemoney").value;
let box = document.getElementById('box');
let addBtn = document.querySelector('.addBtn');
let takeBtn = document.querySelector('.takeBtn');


addBtn.addEventListener('click', ()=>{
    let addmoney = document.getElementById("addmoney").value;
    if(typeof addmoney == 'number'){
        console.log(addmoney);
    }
})




