const urlParams = new URLSearchParams(window.location.search);
const doctorsId = urlParams.get('id');
if (doctorsId) {
fetch(`https://67a0b5295bcfff4fabe04c74.mockapi.io/doctors/${doctorsId}`)
    .then(response => response.json())
    .then(data => {
    const productDetails = document.getElementById('product-details');
    if (data) {
        productDetails.innerHTML = `
            <div class="flex flex-col lg:flex-row xl:flex-row  ">
                <div class="ml-[25px] lg:w-[280px] xl:w-[280px] shadow radius-md">
                    <img src="${data.image}" alt="" class="w-[100%] rounded-md h-[100%] object-cover" />
                </div>
                <div class="p-4 lg:w-1/3 xl:w-1/3">
                    <h1 class="mb-[15px] text-[36px] font-bold">${data.name}</h1>
                    <p class="mb-[10px] text-[18px]"> <span class="text-blue-500">الاقسام </span>${data.ticket}  </p>
                    <p class="mb-[20px] text-[18px]"> ${data.description}</p>
                    <span class="py-[12px] px-[30px] bg-[#2f7141] font-bold text-white my-[20px]">إحجز موعد مع ${data.name}</span>
                </div>
            </div>
                        <p class=" text-[20px] p-5">
                    ${data.description2 || ""}
                        </p>
                    ${data.li8 === undefined ? "" :
            `<h1 class="text-[30px] p-4">أفضل الخدمات لعلاج ${data.ticket}،</h1>`
                    }
                        <ol type="1" class="text-[25px]">
                ${data.li1 ? `<li class="p-2">${data.li1}</li>` : ''}
                ${data.li2 ? `<li class="p-2">${data.li2}</li>` : ''}
                ${data.li3 ? `<li class="p-2">${data.li3}</li>` : ''}
                ${data.li4 ? `<li class="p-2">${data.li4}</li>` : ''}
                ${data.li5 ? `<li class="p-2">${data.li5}</li>` : ''}
                ${data.li6 ? `<li class="p-2">${data.li6}</li>` : ''}
                ${data.li7 ? `<li class="p-2">${data.li7}</li>` : ''}
                ${data.li8 ? `<li class="p-2">${data.li8}</li>` : ''}
            </ol>
        `;
    } else {
        productDetails.innerHTML = '<p>المنتج غير موجود.</p>';
    }
    })
    .catch(error => {
    console.error('خطأ في جلب البيانات:', error);
    document.getElementById('product-details').innerHTML = '<p>حدث خطأ أثناء جلب البيانات.</p>';
    });
} else {
document.getElementById('product-details').innerHTML = '<p>لم يتم العثور على ID للمنتج في الرابط.</p>';
}
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