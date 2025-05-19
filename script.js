document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();

            if (nome === '' || email === '' || telefone === '') {
                alert('Por favor, preencha todos os campos obrigatórios: Nome, E-mail e Telefone.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            // If validation passes, you can handle the form submission here
            // For example, send data to a server or display a success message
            alert('Formulário enviado com sucesso!');
            form.reset(); // Reset form fields after submission
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button (optional, but good for long pages)
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '&uarr;'; // Up arrow
    scrollTopButton.id = 'scrollTopBtn';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.padding = '10px 15px';
    scrollTopButton.style.backgroundColor = '#003366';
    scrollTopButton.style.color = '#fff';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '5px';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.display = 'none'; // Hidden by default
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

});

