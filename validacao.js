<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de contato para o site sobre surf nas Olimpíadas de 2024.">
    <meta name="keywords" content="Surf, Olimpíadas, Contato">
    <title>Contato - Surf nas Olimpíadas de 2024</title>

    <link rel="icon" href="imagens/icone.jpg" type="image/jpg">
    <link rel="stylesheet" href="estilo.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
</head>

<body>
    <section class="azul">
        <div class="container">
            <!-- Cabeçalho com logo e navegação -->
            <div id="header">
                <h1><img src="imagens/logo.png" alt="Logo Olimpíadas" width="100" height="100"></h1>
                <ul id="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                    <li><a href="destaque.html">Destaques</a></li>
                    <li><a href="desafios.html">Desafios</a></li>
                    <li><a href="medalhas.html">Medalhas</a></li>
                    <li><a href="contato.html" class="botao-contato">Contato</a></li>
                </ul>
            </div>

            <!-- Banner da página -->
            <div id="banner">
                <img src="imagens/banner3.avif" alt="Banner Surf nas Olimpíadas">
            </div>

            <!-- Seção de contato -->
            <section id="main-content" style="margin: 40px 0;">
                <h2>Entre em Contato</h2>
                <form id="contact-form" style="max-width: 500px; margin: 0 auto;">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" required>
                    <span class="error-message" id="name-error"></span>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>
                    <span class="error-message" id="email-error"></span>

                    <label for="phone">Telefone:</label>
                    <input type="text" id="phone" required>
                    <span class="error-message" id="phone-error"></span>

                    <label for="message">Mensagem:</label>
                    <textarea id="message" required></textarea>
                    <span class="error-message" id="message-error"></span>

                    <button type="submit">Enviar</button>
                </form>
            </section>

            <!-- Rodapé -->
            <div id="footer" style="margin-top: 40px;">
                <h5>João Felipe 2024 - © Todos os Direitos Reservados - Trabalho Acadêmico sem Fins Lucrativos</h5>
                <div align="right">
                    <a href="#"><img src="imagens/sobe.webp" width="5%"></a>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("contact-form");

            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Impede o envio do formulário

                let isValid = true; // Variável para controlar a validade do formulário

                // Limpa mensagens de erro anteriores
                const errorMessages = document.querySelectorAll(".error-message");
                errorMessages.forEach(msg => msg.textContent = "");

                // Validação do nome
                const name = document.getElementById("name").value.trim();
                if (name === "") {
                    document.getElementById("name-error").textContent = "O nome é obrigatório.";
                    isValid = false;
                }

                // Validação do e-mail
                const email = document.getElementById("email").value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email === "" || !emailPattern.test(email)) {
                    document.getElementById("email-error").textContent = "Insira um e-mail válido.";
                    isValid = false;
                }

                // Validação do telefone
                const phone = document.getElementById("phone").value.trim();
                if (phone === "") {
                    document.getElementById("phone-error").textContent = "O telefone é obrigatório.";
                    isValid = false;
                }

                // Validação da mensagem
                const message = document.getElementById("message").value.trim();
                if (message === "") {
                    document.getElementById("message-error").textContent = "A mensagem não pode estar vazia.";
                    isValid = false;
                }

                // Se o formulário for válido, você pode enviar os dados (ou fazer outra ação)
                if (isValid) {
                    alert("Formulário enviado com sucesso!");
                    // Aqui você pode implementar o envio dos dados, se necessário
                }
            });
        });
    </script>
</body>
</html>
