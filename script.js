let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function playPause() {
     var reproduciendo = true;
      var pista = document.getElementById('playpau');
       var boton_play_pause = document.getElementById('boton_play_pause');
        boton_play_pause.onclick = function () 
        { 
            if (reproduciendo) {
               reproduciendo = false; pista.pause();
              this.value = 'PLAY'; } 
            else {
               reproduciendo = true;
               pista.play(); this.value = 'PAUSE'; } 
        } 
    }
 window.onload = function () { playPause(); }