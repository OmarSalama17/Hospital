fetch('https://67a0b5295bcfff4fabe04c74.mockapi.io/doctors')
.then(response => response.json())
.then(products => {
    let container = document.getElementById('doctor-cards');
    container.innerHTML = "";
    products.forEach(doctors => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('card-shadow', 'mb-[30px]', 'p-[0]', 'card-a', 'rounded-md', 'card-shadow');
        productDiv.setAttribute('id', 'doctor-cards');
        productDiv.innerHTML = `
              
                <a class="no-underline" href="doctorsdetails.html?id=${doctors.id}">
              <div>
                <div class="image mb-[15px]">
                  <img src=${doctors.image} class="w-[100%] h-[273px]" alt="Ahmed Khalifa Nafaa" title="Ahmed Khalifa Nafaa">
                </div>
                <div class="single py-[15px] text-center">
                  <h3 class="text-[20px] mb-[5px] doctor-name">${doctors.name}</h3>
                  <span class="mmdd"> ${doctors.title}</span>
                </div>
              </div>
            </a>
            
        `;
        container.appendChild(productDiv);
    });
})
.catch(error => {
    console.error('حدث خطأ أثناء جلب البيانات:', error);
    document.getElementById('departments').innerHTML = "فشل تحميل المنتجات.";
});

document.getElementById('search-input').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const doctorCards = document.querySelectorAll('#doctor-cards > .card-a');

  doctorCards.forEach(card => {
    const doctorName = card.querySelector('.doctor-name').textContent.toLowerCase();
    const doctor = card.querySelector('.mmdd') ? card.querySelector('.mmdd').textContent.toLowerCase() : '';
    if (doctorName.includes(searchValue) || doctor.includes(searchValue)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hover = document.getElementById("hover");
  const dropdownMenu = document.getElementById("dropdownMenu");
  hover.addEventListener("mouseenter", () => {
    dropdownMenu.classList.remove("hidden"); 
    const rect = hover.getBoundingClientRect(); 
    dropdownMenu.style.top = `${rect.bottom}px`; 
    dropdownMenu.style.left = `440px`;
  });
  hover.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!dropdownMenu.matches(":hover")) { 
        dropdownMenu.classList.add("hidden");
      }
    }, 100); 
  });
  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.add("hidden"); 
  });
  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownMenu.classList.remove("hidden"); 
  });
});