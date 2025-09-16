
function resizeSite(){
    const contain = document.getElementById("contain");
    const width = window.innerWidth;
    if (width < 500){
        SubmitEvent.style.padding ="20px";
        SubmitEvent.style.fontSize="14px";
    }else if (width < 900){
        site.style.padding ="40px";
        site.style.fontSize="18px";
    } else {
        site.style.padding ="60px";
         site.style.fontSize ="22px";
    }
}
//Appeler la fonction reesize window au chargement et quand la fenetre se redimensionnne 
  resizeSite();
  window.addEventListener("resize",resizeSite);