const mainContainer=document.getElementById("mainContainer");
const popupContainer=document.getElementById("popupContainer");
const container=document.getElementById("container");
const email=document.getElementById("emailId");
const errmsg=document.getElementById("errmsg");
const submitbtn=document.getElementById('subscribebtn');

submitbtn.addEventListener('click',Checker);
function OpenPopup(email){
      const popupemail=document.getElementById('popupemail');
      popupemail.innerText=email;
      popupContainer.classList.add("showpopup");
};
function ClosePopup(){
      popupContainer.classList.remove('showpopup');
}

function Checker(){
      let validreg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email.value.match(validreg)){
            errmsg.style.display='none';
            OpenPopup(email.value);
            email.value='';
      }
      else if(email.value=""){
            errmsg.style.display="none";
      }
      else{
            errmsg.style.display='none';
      }
}