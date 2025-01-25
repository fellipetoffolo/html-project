// Function Declaration: Validação de Formulário
function validateEmail() {
  const emailInput = document.getElementById('email-input').value.trim(); // Remove espaços extras
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email

  if (emailInput === '') {
      alert('Por favor, insira um email!');
      return false;
  } else if (!emailRegex.test(emailInput)) {
      alert('Por favor, insira um email válido!');
      return false;
  }

  alert(`Inscrição confirmada para: ${emailInput}`);
  return true;
}

  
  // Function Expression: Manipulação de Mouse (hover na logo)
  const highlightLogo = function () {
    const logo = document.querySelector('.logo-img');
    logo.style.border = '3px solid #00f2fe'; // Adiciona borda
    logo.style.transition = 'border 0.3s ease-in-out'; // Animação
  };
  
  const removeHighlight = function () {
    const logo = document.querySelector('.logo-img');
    logo.style.border = 'none'; // Remove a borda
  };
  
  // Arrow Function: Manipulação de Teclado
  const logKeyPress = (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
  };
  
  // Trabalhando com Arrays
  const newsletterFeatures = ['Atualizações', 'Promoções', 'Novidades'];
  console.log('Funcionalidades da newsletter:');
  newsletterFeatures.forEach((feature, index) => console.log(`${index + 1}: ${feature}`));
  
  // Trabalhando com Objetos
  const user = {
    name: 'Amigo Leitor',
    email: 'amigo@leitor.com',
    subscribe: function () {
      console.log(`${this.name} foi inscrito com sucesso!`);
    },
  };
  console.log(user);
  user.subscribe();
  
  // Eventos
  window.addEventListener('keypress', logKeyPress); // Evento de teclado
  
  const form = document.getElementById('newsletter-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio do formulário
    validateEmail();
  });

// Seleciona o primeiro slide do carrossel
const firstSlide = document.querySelector('.carousel-item:first-child');

// Seleciona a primeira imagem dentro do primeiro slide
if (firstSlide) {
    const firstImage = firstSlide.querySelector('img'); // Ajuste o seletor caso a imagem esteja envolvida por outro elemento

    // Adiciona um evento de clique à primeira imagem
    if (firstImage) {
        firstImage.addEventListener('click', () => {
            // Abre o link em uma nova guia
            window.open('https://www.youtube.com/watch?v=zzF9D5w63gs&ab_channel=CompadreTiguera', '_blank'); // Substitua pelo link desejado
        });
    }
}

  
  const logo = document.querySelector('.logo-img');
  logo.addEventListener('mouseover', highlightLogo); // Evento de mouse (hover)
  logo.addEventListener('mouseout', removeHighlight);