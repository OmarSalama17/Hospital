fetch('https://67a0b5295bcfff4fabe04c74.mockapi.io/product')
.then(response => response.json())
.then(products => {
    let container = document.getElementById('departments');
    container.innerHTML = "";
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('col-xl-4', 'col-md-6', 'col-lg-4', 'radius-md', 'card-a');
        productDiv.setAttribute('id', 'departments-card');
        productDiv.innerHTML = `
              
                <div class="shadow radius">
                    <div class=" radius-md card-a">
                        <img class="w-[100%] image" src="${product.image}" alt="Internal Medicine Dep" title="Internal Medicine Dep">
                    </div>
                    <div class="pt-[22px] pr-[30px] pb-[20px] pl-[30px]">
                        <h3 class="text-[24px] mb-[10px]"><a href="details.html?id=${product.id}">${product.name}</a></h3>
                        <p class="mb-[10px]"> ${product.description1} </p>
                        <a href="details.html?id=${product.id}" class="learn_more">معرفة المزيد </a>
                    </div>
                </div>
            
        `;
        container.appendChild(productDiv);
    });
})
.catch(error => {
    console.error('حدث خطأ أثناء جلب البيانات:', error);
    document.getElementById('departments').innerHTML = "فشل تحميل المنتجات.";
});

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
