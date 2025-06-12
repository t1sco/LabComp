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

function mostrarDescripcion(marca) {
    document.querySelectorAll('.descripcion').forEach(desc => {
        desc.classList.remove('visible');
    });
    document.getElementById(`desc-${marca}`).classList.add('visible');
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleDarkMode);

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});