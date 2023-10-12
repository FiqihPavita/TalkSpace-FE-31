const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const urlParams = new URLSearchParams(window.location.search);
const selectedOption = urlParams.get("selectedOption");

if (selectedOption) {
  const selectElement = document.getElementById("paket-konseling");
  selectElement.value = selectedOption;
  }


document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('bookingForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.getElementById('nama_lengkap').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('nomor_whatsapp').value;
        const usia = document.getElementById('usia').value;
        const tanggalKonseling = document.getElementById('tanggal_konseling').value;
        const paketKonseling = document.getElementById('layanan').value;

        try {
            fetch('https://talkspace-be-production.up.railway.app/api/konseling/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama_lengkap: username,
                    email: email,
                    nomor_whatsapp: phone, // Add phone
                    usia: usia, // Add usia
                    tanggal_konseling: tanggalKonseling, // Add tanggalKonseling
                    layanan: paketKonseling, // Add paketKonseling
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

// document.getElementById("bookingForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData)

//     fetch(event.target.action, {
//       method: "POST",
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Data telah berhasil terkirim untuk lebih lanjut anda akan dihubungi melalui Email. Terima kasih telah mendaftar!");
//           window.location.href = '/summary.html'
//         } else {
//           alert("Error submitting the form. Please try again later.");
//         }
//       })
//       .catch((error) => {
//         console.error("Network error:", error);
//         alert("Network error occurred. Please check your internet connection.");
//       });
//   });  

function openPopup() {
  alert("Terimakasih telah melakukan pendaftaran, untuk informasi selanjutnya silahkan cek Gmail anda");
  window.location.href = "summary.html";

}
/*document
  .getElementById("bookingForm")
  p.addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert(
      "Data telah berhasil terkirim untuk lebih lanjut anda akan dihubungi melalui Email. Terima kasih telah mendaftar!"
    );
  });

const form = document.getElementById('bookingForm');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
      window.location.href = '/summary.html'
      });*/

