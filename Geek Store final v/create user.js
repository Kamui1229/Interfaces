      

// Función para cargar los usuarios del localStorage
function loadUsers() {
    return new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem('users')) || []; // Si no existen usuarios, se crea un array vacío
        resolve(users);
    });
}

// Función para guardar los usuarios en el localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Manejar el envío del formulario de registro
document.getElementById("Registrar").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    const username = document.getElementById("RegistrarUsuario").value;
    const email = document.getElementById("RegistrarCorreo").value;
    const password = document.getElementById("RegistrarContraseña").value;
    const confirmPassword = document.getElementById("ConfirmarContraseña").value;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Cargar los usuarios existentes
    loadUsers().then(users => {
        // Verificar si el correo electrónico ya está registrado
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            alert("Este correo electrónico ya está registrado.");
            return;
        }

        // Crear el nuevo usuario
        const newUser = {
            username: username,
            email: email,
            password: password
        };

        // Agregar el nuevo usuario al arreglo de usuarios
        users.push(newUser);

        // Guardar los usuarios actualizados en el localStorage
        saveUsers(users);

        alert("Cuenta registrada exitosamente.");
    }).catch(error => {
        console.error("Error al cargar los usuarios:", error);
        alert("Hubo un problema al registrar la cuenta.");
    });
});