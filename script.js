// Seleciona os elementos do menu móvel e da navegação móvel
const menuMobile = document.querySelector(".menu-mobile");
const mobileNav = document.querySelector(".menu-mobile");

// Adiciona um ouvinte de evento de clique no ícone do menu móvel
menuMobile.addEventListener('click', function () {
  // Adiciona ou remove a classe "nav-active" para mostrar/ocultar o menu móvel
  mobileNav.classList.toggle('nav-active');
});

console.log('VOCÊ É MUITO CURIOSO!')
console.log('POR GENTILEZA, SAIA DO MODO DESENVOLVEDOR APERTANDO F12.')

document.addEventListener('DOMContentLoaded', function () {
  // Adicionar rolagem suave para os links do menu de navegação
  var links = document.querySelectorAll('nav ul li a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', scrollToSection);
  }

  // Limpar formulário após envio
  var form = document.querySelector('form');
  form.addEventListener('submit', clearForm);
});

function scrollToSection(event) {
  event.preventDefault();
  var target = event.target.getAttribute('href');
  var section = document.querySelector(target);
  section.scrollIntoView({
    behavior: 'smooth'
  });
}

function clearForm() {
  var form = document.querySelector('form');
  form.reset();
}