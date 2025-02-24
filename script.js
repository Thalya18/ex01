document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação (não use em produção)
    if (username === "usuario" && password === "senha123") {
        alert('Login bem-sucedido!');
        // Redirecionar para a página principal
        window.location.href = "dashboard.html"; // Página fictícia
    } else {
        alert('Usuário ou senha incorretos.');
    }
});