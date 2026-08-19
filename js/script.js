// Espera o DOM (HTML) carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    
    // Busca o arquivo nav.html que está dentro da pasta components
    fetch('pages/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o menu de navegação");
            }
            return response.text();
        })
        .then(data => {
            // Insere o conteúdo do nav.html dentro da div com id "nav-container"
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(error => console.error('Erro:', error));
});
