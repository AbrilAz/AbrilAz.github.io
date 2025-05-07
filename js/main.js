
$(document).ready(function () {
    // 1. Animación de aparición para la imagen de perfil (efecto fadeIn)
    $(".myclass-pic").hide().fadeIn(2000);
  
    // 2. Activar tooltips de Bootstrap en elementos que los tengan definidos
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    // 3. Al hacer clic en cualquier botón con clase btn-info, se muestra una alerta
    $(".btn-info").click(function (e) {
      e.preventDefault();
      alert("¡La pagina se esta actualizando!");
    });
  
    // 4. Agregar efecto de sombra al pasar el mouse sobre proyectos
    $(".proyecto").hover(
      function () {
        $(this).css("box-shadow", "0 10px 20px rgba(0,0,0,0.3)");
      },
      function () {
        $(this).css("box-shadow", "none");
      }
    );
  
  });

  // Mostrar el carrusel de referencias con animación al cargar
$(document).ready(function () {
  $('#recomendaciones').fadeIn(800);
});

  