/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinksforEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


   
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
   
    menuIcon.classList.remove ('bx-x');
    navbar.classList.remove ('active');
    
};


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: [' Desenvolvedor Frontend ','Backend', 'Freelancer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementsByName('nome')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const telefone = document.getElementsByName('telefone')[0].value;
    const assunto = document.getElementsByName('assunto')[0].value;
    const mensagem = document.getElementsByName('mensagem')[0].value;

    emailjs.send("service_2feemmj", "template_8taq5bv", {
        nome: nome,
        email: email,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem
    })
    .then(function(response) {
        console.log("Email enviado com sucesso!", response.status, response.text);
        alert("Email enviado com sucesso!");
    }, function(error) {
        console.log("Erro ao enviar email", error);
        alert("Erro ao enviar email.");
    });
});
