function ToggleHandler(){
      const menu=document.getElementById('open');
      const nav=document.getElementById('nav');
      menu.addEventListener('click',()=>{
            nav.classList.toggle('show_menu');
      })
}

function ShowDropdown(){
      const dropIcon=document.querySelectorAll('.dropdown__icon')
}
ToggleHandler();