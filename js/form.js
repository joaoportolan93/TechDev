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

// Validação do formulário
function validateForm(event) {
    event.preventDefault();
    
    // Aqui você pode adicionar suas validações específicas
    
    // Simulando envio bem-sucedido
    alert('Inscrição enviada com sucesso!');
    document.getElementById('inscricaoForm').reset();
    
    return false;
}