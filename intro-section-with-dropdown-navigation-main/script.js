function ToggleHandler(){
      const menu=document.getElementById('open');
      const sidebar=document.getElementById('sidebar');
      menu.addEventListener('click',()=>{
            console.log("heloo world");
            sidebar.classList.toggle('show_menu');
      })
}