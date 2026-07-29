// JS GLOBAL ET INTERACTIVITÉ DE SITE
document.addEventListener('DOMContentLoaded', () => {
  // 1. MENU MOBILE
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. FORMULAIRE DE CONTACT
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.');
      contactForm.reset();
    });
  }

  // 3. SELECTION DU MODE DE PAIEMENT DONS (MOBILE MONEY)
  const paymentBtns = document.querySelectorAll('.payment-btn');
  const selectedProvider = document.getElementById('selectedProvider');

  if (paymentBtns.length > 0) {
    paymentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        paymentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (selectedProvider) {
          selectedProvider.value = btn.dataset.provider;
        }
      });
    });
  }

  // 4. FORMULAIRE DE DONATION
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const provider = selectedProvider ? selectedProvider.value : 'Mobile Money';
      alert(`Merci pour votre générosité ! Redirection vers la passerelle de paiement (${provider})...`);
      donationForm.reset();
    });
  }
});
