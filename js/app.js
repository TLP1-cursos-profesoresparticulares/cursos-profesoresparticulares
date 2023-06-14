 // Obtener el elemento del carrusel
 var carousel = document.getElementById('myCarousel');

 // Crear instancia del carrusel utilizando la API de Bootstrap
 var carouselInstance = new bootstrap.Carousel(carousel);

 // Función para mover el carrusel a la derecha
 function moverDerecha() {
   carouselInstance.next();
 }

 // Función para mover el carrusel a la izquierda
 function moverIzquierda() {
   carouselInstance.prev();
 }