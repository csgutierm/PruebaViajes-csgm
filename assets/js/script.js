$(document).ready(function () {

  // el siguiente codigo permite cargar el set de imagenes de baja resolucion en aparatos de pantalla pequeña
  // aumenta drasticamente la velocidad de carga de la pagina y su respuesta mejora notablemente
  // en resoluciones mayores (en este caso 768+px) carga las imagenes de alta resolución
  // load high res 300-400ms cpu ryzen 5600g
  // load low res 140-180ms cpu ryzen 5600g
  let screenW = window.screen.width;
  if (screenW>768) {
    document.getElementById("imageBigC1").src="./assets/img/carousel1.jpg";
    document.getElementById("imageBigC2").src="./assets/img/carousel2.jpg";
    document.getElementById("imageBigC3").src="./assets/img/carousel3.jpg";

    document.getElementById("imageBigCard1").src="./assets/img/card1.jpg";
    document.getElementById("imageBigCard2").src="./assets/img/card2.jpg";
    document.getElementById("imageBigCard3").src="./assets/img/card3.jpg";
    document.getElementById("imageBigCard4").src="./assets/img/card4.jpg";

  } else {
    document.getElementById("imageBigC1").src="./assets/img/carousel1-small.jpg";
    document.getElementById("imageBigC2").src="./assets/img/carousel2-small.jpg";
    document.getElementById("imageBigC3").src="./assets/img/carousel3-small.jpg";

    document.getElementById("imageBigCard1").src="./assets/img/card1-small.jpg";
    document.getElementById("imageBigCard2").src="./assets/img/card2-small.jpg";
    document.getElementById("imageBigCard3").src="./assets/img/card3-small.jpg";
    document.getElementById("imageBigCard4").src="./assets/img/card4-small.jpg";
  }





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
  if (document.documentElement.scrollTop > w / 2) {
    document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark mb-lg-3 bg-dark bg-opacity-75 fixed-top";
  } else {
    document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark bg-transparent mb-lg-3 fixed-top";
  }

  // chequeo al detectar scroll
  window.onscroll = function () { myFunction() };

  function myFunction() {
    w = window.innerWidth;
    if (document.documentElement.scrollTop > w / 2) {
      document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark mb-lg-3 bg-dark bg-opacity-75 fixed-top";
    } else {
      document.getElementById("navTest").className = "navbar navbar-expand-lg navbar-dark bg-transparent mb-lg-3 fixed-top";
    }
  }
})

// boton para dar sombra al parrafo u objeto de texto usando jquery click
$(document).ready(function () {
  $(".shadowOnClick").click(function () {
    // $(this).hide(); esconder desactivado
    $(this).css("text-shadow", "2px 2px black");
  });
});
