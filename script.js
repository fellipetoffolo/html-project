// Function Declaration: Validação de Formulário
function validateEmail() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput === '') {
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
  
  const logo = document.querySelector('.logo-img');
  logo.addEventListener('mouseover', highlightLogo); // Evento de mouse (hover)
  logo.addEventListener('mouseout', removeHighlight);