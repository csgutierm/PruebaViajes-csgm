$(document).ready(function () {
  // activando los tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // la siguiente funcion chequea la distancia al "top"
  // del documento se activa al detectarse un "scroll" en la ventana
  // se utiliza en este caso para cambiar el fondo del nav de transparente a no transparente
  // los primeros 100 pixeles es transparente y luego no 
  // calculando scroll adecuado responsivo
  let w = window.innerWidth;

  // chequeo inicial al cargar la pagina
  if (document.documentElement.scrollTop > w/2) {
    document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark mb-lg-3 bg-dark bg-opacity-75 fixed-top";
  } else {
    document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark bg-transparent mb-lg-3 fixed-top";
  }

  // chequeo al detectar scroll
  window.onscroll = function () { myFunction() };

  function myFunction() {
    w = window.innerWidth;
    if (document.documentElement.scrollTop >  w/2) {
      document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark mb-lg-3 bg-dark bg-opacity-75 fixed-top";
    } else {
      document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark bg-transparent mb-lg-3 fixed-top";
    }
  }
})

// boton para dar sombra al parrafo u objeto de texto usando jquery click
$(document).ready(function(){
  $(".shadowOnClick").click(function(){
    // $(this).hide(); esconder desactivado
    $(this).css( "text-shadow", "2px 2px black");
  });
});
