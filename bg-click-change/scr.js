const obj1=document.querySelector('.first')
const obj2=document.querySelector('.sec')
const obj3=document.querySelector('.third')
const obj4=document.querySelector('.four')
const body=document.querySelector('body')

body.addEventListener('click',()=>{
    const obj = document.querySelector('.active');
    const bg=getComputedStyle(body).backgroundColor;
    obj.style.backgroundColor=bg;
    body.style.backgroundColor='#fff';
    obj.classList.remove('active')
})

obj1.addEventListener('click',()=>{
    const bg = getComputedStyle(obj1).backgroundColor;
    obj1.classList.add('active')
    document.querySelector('body').style.backgroundColor = bg;
    obj1.style.backgroundColor='#fff';
})

obj2.addEventListener('click',()=>{
    const bg = getComputedStyle(obj2).backgroundColor;
    obj1.classList.add('active')
    document.querySelector('body').style.backgroundColor = bg;
    obj2.style.backgroundColor='#fff';
})

obj3.addEventListener('click',()=>{
    obj1.classList.add('active')
    const bg = getComputedStyle(obj3).backgroundColor;
    document.querySelector('body').style.backgroundColor = bg;
    obj3.style.backgroundColor='#fff';
})

obj4.addEventListener('click',()=>{
    obj1.classList.add('active')
    const bg = getComputedStyle(obj4).backgroundColor;
    document.querySelector('body').style.backgroundColor = bg;
    obj4.style.backgroundColor='#fff';
})
