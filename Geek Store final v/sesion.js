const jsonFilePath = "https://raw.githubusercontent.com/Kamui1229/jsons/refs/heads/main/users.json";

      
function loadUsers() {
    return new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem('users')) || []; // Si no existen usuarios, se crea un array vacío
        resolve(users);
    });
}

// Manejar el envío del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    const email = document.getElementById("Correo").value;
    const password = document.getElementById("Contrasena").value;

    // Cargar los usuarios desde localStorage
    loadUsers()
        .then(users => {
            // Buscar el usuario por correo electrónico
            const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

            if (!user) {
                alert("El usuario no existe.");
            } else if (user.password !== password) {
                alert("Contraseña incorrecta.");
            } else {
                alert("Inicio de sesión exitoso.");
                // Opcional: Guarda en localStorage o sessionStorage
                localStorage.setItem('loggedInUser', email);  // Guarda el email del usuario que ha iniciado sesión
                // Puedes redirigir a la página principal o realizar alguna otra acción
                window.location.href = "Geek Store.html";  // Ejemplo: redirigir a otra página
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema al cargar los datos.");
        });
});