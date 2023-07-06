function ToggleHandler(){
      const menu=document.getElementById('open');
      const close=document.getElementById('close');
      const nav=document.getElementById('nav');
      menu.addEventListener('click',()=>{
            nav.classList.toggle('show_menu');
            menu.classList.add('hidden')
            close.classList.remove('');

      })
      close.addEventListener('click',()=>{
            nav.classList.remove('show_menu');
            close.classList.add('hidden');
            menu.classList.remove('hidden')
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