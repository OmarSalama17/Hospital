document.getElementById('search-department').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const departmentCards = document.querySelectorAll('#departments-card');

  departmentCards.forEach(card => {
    const departmentName = card.querySelector('h3').textContent.toLowerCase();
    if (departmentName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
