function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Por favor, preencha seu nome.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, preencha seu email.');
        return false;
    }

    if (subject.trim() === '') {
        alert('Por favor, preencha o assunto.');
        return false;
    }

    if (phone.trim() === '') {
        alert('Por favor, preencha seu telefone.');
        return false;
    }

    if (message.trim() === '') {
        alert('Por favor, escreva uma mensagem.');
        return false;
    }

    alert('Mensagem enviada com sucesso!');
    return true;
}
