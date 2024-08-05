const body=document.querySelector('body');
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');

function random(num){
    return Math.floor(Math.random()*num+1);
}
let event_id;
start.addEventListener('click',()=>{
    if(!event_id){
        event_id = setInterval(()=>{
            let color=`rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            body.style.backgroundColor=color;
        },1000)
    }
})

stop.addEventListener('click',()=>{
    clearInterval(event_id);
    event_id=null;
})