function ToggleHandler(){
      const menu=document.getElementById('open');
      const nav=document.getElementById('nav');
      menu.addEventListener('click',()=>{
            nav.classList.toggle('show_menu');
      })
}

function ShowDropdown(){
      const dropIcons=document.querySelectorAll('.dropdown__icon');
      console.log(dropIcons);
      dropIcons.forEach((e)=>e.addEventListener('click',()=>{
      e.nextElementSibling.classList.toggle("active");
}))
}
ToggleHandler();
ShowDropdown();