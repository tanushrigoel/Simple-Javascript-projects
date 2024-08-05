let ins=document.querySelector('.key')

window.addEventListener('keydown',(e)=>{
    ins.innerText=`You pressed ${e.key} and code is ${e.code}`
});