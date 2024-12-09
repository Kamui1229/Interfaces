
        const jsonFilePath = "https://raw.githubusercontent.com/Kamui1229/jsons/refs/heads/main/users.json";

      
        function loadUsers() {
            return fetch(jsonFilePath)
                .then(response => {
                    if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
                    return response.json();
                });
        }

        // Manejar el envío del formulario
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que el formulario se recargue

            const email = document.getElementById("Correo").value;
            const password = document.getElementById("Contrasena").value;

            // Cargar los usuarios y verificar credenciales
            loadUsers()
                .then(users => {
                    const user = users.find(u => u.email === email);

                    if (!user) {
                        alert("El usuario no existe.");
                    } else if (user.password !== password) {
                        alert("Contraseña incorrecta.");
                    } else {
                        alert("Inicio de sesión exitoso.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Hubo un problema al cargar los datos.");
                });
        });
