const elToglle=document.querySelector('.toggle');
const elList=document.querySelector('.nav__list');
const elTimes=document.querySelector('.times');
function Times(){
    elTimes.classList.toggle('times-active');
}
elToglle.addEventListener('click',()=>{
    Times();
    if(Times){
        elToglle.style.display='none';
    }
    elList.classList.add('nav__list-active');
})
elTimes.addEventListener('click',()=>{
    elToglle.style.display='block';
   Times(); 
    elList.classList.remove('nav__list-active');
})