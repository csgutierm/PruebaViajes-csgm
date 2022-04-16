$(document).ready(function () {


    // la siguiente funcion chequea la distancia al "top"
    // del documento se activa al detectarse un "scroll" en la ventana
    // se utiliza en este caso para cambiar el fondo del nav de transparente a no transparente
    // los primeros 100 scrolls es transparente y luego no 
    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.documentElement.scrollTop > 100) {
        document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark mb-lg-3 bg-dark fixed-top";
      } else {
        document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark bg-transparent mb-lg-3 fixed-top";
      }
    }

})
