        const des = document.getElementById('description')
        const urlParams = new URLSearchParams(window.location.search);
        const doctorList = document.getElementById('doctor-list');
        const productId = urlParams.get('id');
        const landing = document.getElementById('landing');
        if (productId) {
          fetch(`https://67a0b5295bcfff4fabe04c74.mockapi.io/product/${productId}`)
            .then(response => response.json())
            .then(data => {
              const productDetails = document.getElementById('product-details');
              if (data) {
                des.innerHTML = `
            <h3 class="text-[24px] mb-[50px] font-bold">${data.description2}</h3>
            <input type="text" id="search-input" placeholder="Search for doctors..." class="mb-[20px] p-[10px] border rounded-md w-full">
`;}
if(data){
  landing.innerHTML=`
              <h1 class="text-white font-bold text-[50px]"> ${data.name}</h1>
  `
}

fetch('https://67a0b5295bcfff4fabe04c74.mockapi.io/doctors')
          .then(response => response.json())
          .then(doctorData => {
            const filteredDoctors = doctorData.filter(doctor => doctor.ticket === data.ticket);  // افترضت أنك تستخدم `category` في بيانات المنتج

            if (filteredDoctors.length > 0) {
              let doctorsHtml = '';
              filteredDoctors.forEach(doctor => {
                doctorsHtml += `
                <div class="card-shadow mb-[30px] p-[0] card-a rounded-md card-shadow">
                <a class="no-underline" href="doctorsdetails.html?id=${doctor.id}">
              <div>
                <div class="image mb-[15px]">
                  <img src=${doctor.image} class="w-[100%] h-[273px]" alt="Ahmed Khalifa Nafaa" title="Ahmed Khalifa Nafaa">
                </div>
                <div class="single py-[15px] text-center">
                  <h3 class="text-[20px] mb-[5px] doctor-name">${doctor.name}</h3>
                  <span class="mmdd"> ${doctor.title}</span>
                </div>
              </div>
            </a>
            </div>
                `;
              });
              doctorList.innerHTML = doctorsHtml;
            } else {
              doctorList.innerHTML = '<p>لا يوجد أطباء مرتبطين بهذا المنتج.</p>';
            }
          })
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


          