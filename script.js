document.addEventListener('DOMContentLoaded', function() {
  // Adicionar rolagem suave para os links do menu de navegação
  var links = document.querySelectorAll('nav a');
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
