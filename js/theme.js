// Função para gerenciar o tema
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Função para alternar o tema
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        icon.className = newTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
        
        // Salvar preferência
        localStorage.setItem('theme', newTheme);
    }
    
    // Carregar tema preferido
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
    
    // Adicionar evento de clique
    themeToggle.addEventListener('click', toggleTheme);
}

// Inicializar tema quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initTheme);