const botaoDisqueDenuncia = document.getElementById('botaoDisqueDenuncia');

botaoDisqueDenuncia.addEventListener('click', function() {
  // Número de telefone com DDD e sem hífens
  const numeroWhatsApp = '5511996110100';
  // Texto de abertura da conversa (opcional)
  const textoMensagem = 'Gostaria de denunciar algo...';

  // Cria a URL do WhatsApp com base no número e texto (API WhatsApp Business)
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoMensagem}`;

  // Abre a URL no navegador, iniciando a conversa no WhatsApp
  window.open(urlWhatsApp, '_blank');
});
