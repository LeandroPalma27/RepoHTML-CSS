$(document).ready(function () {
    $("button").click(function (datos) {
        let nombre = $("#nombre").val();
        let apellidos = $("#apellidos").val();
        let correo = $("#email").val();
        let logi = $("#logi").val();
        let pass = $("#pass").val();

            alert("Nombres y apellidos: "+nombre+" "+apellidos+"\nCorreo electronico: "+correo+"\nNombre de usuario: "+logi);
        
    });
});
