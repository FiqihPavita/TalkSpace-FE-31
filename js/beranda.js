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

function openPopup() {
  alert("Terimakasih telah mengisi Testimoni");
  window.location.href = "summary-testi.html";
}


document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('testimoni-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.getElementById('nama_lengkap').value;
        const email = document.getElementById('email').value;
        const paketKonseling = document.getElementById('layanan').value;
        const review = document.getElementById('review')

        try {
            fetch('https://talkspace-be-production.up.railway.app/api/testimoni/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama_lengkap: username,
                    email: email,
                    layanan: paketKonseling,
                    review: review 
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Permintaan gagal dengan status: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Handle the response from the backend (e.g., display a success message)
                alert(data.message);
            })
            .catch(error => {
                // Handle errors, such as network errors or server errors
                console.error('Fetch error:', error);
                alert('Terjadi kesalahan. Silakan coba lagi nanti.');
            });
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi nanti.');
        }
    });
});