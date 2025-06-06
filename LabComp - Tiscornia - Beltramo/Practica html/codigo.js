function validar() {

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario == "tisco" && clave == "123") {

        window.location.href = "autos.html";
        
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }

}