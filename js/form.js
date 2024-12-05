// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        e.target.value = value;
    }
});

// Máscara para telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        e.target.value = value;
    }
});

// Alternar tema
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

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

themeToggle.addEventListener('click', toggleTheme);

// Validação do formulário
function validateForm(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar suas validações específicas
    
    // Simulando envio bem-sucedido
    Swal.fire({
        title: 'Sucesso!',
        text: 'Sua inscrição foi enviada com sucesso!',
        icon: 'success',
        confirmButtonColor: '#2563eb'
    }).then(() => {
        // Limpar formulário
        document.getElementById('inscricaoForm').reset();
    });
    
    return false;
} 