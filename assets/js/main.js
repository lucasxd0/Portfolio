/*===== MOSTRAR MENU =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE O MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SEÇÕES DE ROLAGEM LINK ATIVO ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== ANIMAÇÃO DE REVELAÇÃO DE ROLAGEM =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay: 200,
//     reset: true
});

sr.reveal('.button, .contact__message, .about__img, .skills__subtitle, .skills__text',); 
sr.reveal('.about__subtitle, .about__text, .skills__img',);  
sr.reveal('.skills__data, .work__img, .contact__input',); 

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var mensagem = "Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem;
    var numeroWhatsapp = "5581987546425"; // Número do WhatsApp
    var url = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensagem);
    window.open(url, "_blank");
}
