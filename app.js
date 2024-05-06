let numbs = document.querySelectorAll(".numbs")
let takemoney = document.getElementById("takemoney").value;
let box = document.getElementById('box');
let addBtn = document.querySelector('.addBtn');
let takeBtn = document.querySelector('.takeBtn');


addBtn.addEventListener('click', (e)=>{
    let addmoney = Number(document.getElementById("addmoney").value);
    //console.log(addmoney)
    if(typeof addmoney == 'number'){
        console.log('hello');
    }else{
        console.log('it not number')
    }
})




