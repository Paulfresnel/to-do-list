console.log('test')
window.addEventListener('load',()=>{
  const removeBtn = document.getElementById('removeChecked');
  removeBtn.addEventListener('click', removeChecked);
document.querySelectorAll('.fa-regular.fa-square').forEach((check)=>{
    check.addEventListener('click', checkUncheck)
});
  })


function checkUncheck(event){
    const target = event.currentTarget;
  if (target.getAttribute('class') === 'fa-regular fa-square'){
    console.log('unchecked');
    target.setAttribute('class', 'fa-regular fa-square-check');
   target.nextElementSibling.style.textDecoration = "line-through";
    target.nextElementSibling.style.class = "to-be-removed"
  } else {
  target.setAttribute('class', 'fa-regular fa-square');
   target.nextElementSibling.style.textDecoration = "none";
    console.log(target.getAttribute('class'));
    }
}

function checkUncheckAll(){
  document.querySelectorAll('.fa-regular.fa-square').forEach((check)=>{
    check.setAttribute('class', 'fa-regular fa-square');
});
}

function removeChecked(){
  document.querySelectorAll('.list-item').forEach((item) => {
    console.log(item.children[1].getAttribute('style'))
    if (item.children[1].style.textDecoration === 'line-through'){
      item.remove();
    }
  })
}

