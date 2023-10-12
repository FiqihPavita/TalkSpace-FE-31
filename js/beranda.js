const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.getElementById("testimoniForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const userEmail = emailInput.value;

  
  const registeredEmails = ["user1@example.com", "user2@example.com", "user3@example.com"];

  if (registeredEmails.includes(userEmail)) {
      alert("Testimoni berhasil dikirim.");
      
  } else {
      alert("Alamat email tidak terdaftar. Anda tidak dapat mengirimkan testimoni.");
  }
});