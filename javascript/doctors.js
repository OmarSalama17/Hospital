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
