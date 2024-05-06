let addBtn = document.querySelector('.addBtn');
let takeBtn = document.querySelector('.takeBtn');
//Add money function
addBtn.addEventListener('click', ()=>{
    let numbs = Number(document.querySelector(".numbone").textContent);
    let addmoney = Number(document.getElementById("addmoney").value);
    const numbOneElement = document.querySelector(".numbone");
    const tnumbs = Number(document.querySelector(".tnumbs").textContent);
    if(isNaN(addmoney)){
        document.getElementById('span1').innerHTML = 'enter a valid number'
    }else{
        document.getElementById('span1').innerHTML = ' '
        numbOneElement.innerHTML = numbs + addmoney;
        console.log(tnumbs)
        document.querySelector(".tnumbs").innerHTML = addmoney + tnumbs;
    }
})
//deposide money function
takeBtn.addEventListener('click', ()=>{
    const takeMoney = Number(document.querySelector('#takemoney').value);
    const dipMoney = Number(document.querySelector('.dipnumbs').textContent);
    console.log(dipMoney);
    if(isNaN(takeMoney)){
        document.getElementById('span2').innerHTML = 'enter a valid number'
    }else{
        const tnumbs = Number(document.querySelector(".tnumbs").textContent);
        document.querySelector('.dipnumbs').innerHTML = takeMoney + dipMoney;
        document.getElementById('span2').innerHTML = ' '
       
        if(tnumbs < takeMoney){
            document.getElementById('span2').innerHTML = 'gorid'
        }else{
            document.querySelector(".tnumbs").innerHTML = tnumbs - takeMoney;
        }
    }
})




