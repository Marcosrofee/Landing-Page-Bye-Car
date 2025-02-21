const MOTORCYCLES = [
    {
      img: "./assets/img-card-1.png",
      paragraph: "Scooter Elétrica Voltz EV1",
      price: "R$ 619,90",
      description: "A Voltz EV1 é uma scooter elétrica que possui um motor de 800W, bateria removível e autonomia de até 60 km. Além disso, ela é 100% elétrica e não emite poluentes!"
    },{
      img: "./assets/img-card-2.png",
      paragraph: "Honda CB 500X",
      price: "R$ 890,90",
      description: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
    }
  ]
  
  let liEls = document.querySelectorAll("ul li");
  let index = 0;
  
  function show(indexSum) {
    index = index + indexSum;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
  }
  
  setInterval(() => {
    if (index === liEls.length - 1) {
      show(index - 2);
    } else {
      show(index + 1);
    }
  }, 3000);
  
  function showModal(index) {
    let modalEl = document.querySelector("#modal");
    modalEl.innerHTML = "";
    modalEl.innerHTML = `
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./assets/close-btn.png" alt="close-button" />
      </button>
      <p>
      ${MOTORCYCLES[index].paragraph}
      </p>
      <img src="${MOTORCYCLES[index].img}" alt="" />
      <p>
        ${MOTORCYCLES[index].description}
      </p>
      <span>${MOTORCYCLES[index].price}</span>
      <button ">Quero assinar!</button>
    </div>
    `;
    modalEl.style.visibility = "visible";
  }
  
  function closeModal() {
    let modalEl = document.querySelector("#modal");
    modalEl.style.visibility = "hidden";
  }
  
  
  
  
  
  
  
   const PET_CARD = [
     {
       img: "./assets/item-1.png",
       paragraph: "Ração Tchei para cachorro belga grande porte - 600 g",
       price: "R$ 20,90",
     },
     {
       img: "./assets/item-2.png",
       paragraph: "Ração Tchei para cachorro belga grande porte - 300 g",
       price: "R$ 15,90",
     },
   ];
  
   let liEls = document.querySelectorAll(".itens-carousel li");
   let modalEl = document.querySelector("#modal");
   let index = 0;
  
   function show(increase) {
     index = index + increase;
     index = Math.min(Math.max(index, 0), liEls.length - 1);
     liEls[index].scrollIntoView({ behavior: "smooth" });
   }
  
 setInterval(() => {
     if (index === liEls.length - 1) {
       show(index - 2);
     } else {
       show(index + 1);
     }
   }, 5000);
  
   function showModal(index) {
     modalEl.innerHTML = "";
     modalEl.innerHTML = ` 
     <div class="modal-card">
       <button onclick="closeModal()">
         <img src="./assets/close-btn.png" alt="close-button" />
       </button>
       <img src="${PET_CARD[index].img}" alt="" />
       <p>
       ${PET_CARD[index].paragraph}
       </p>
       <span>${PET_CARD[index].price}</span>
       <button ">Quero Comprar!</button>
     </div>
     `;
     modalEl.style.visibility = "visible";
   }
  
   function closeModal() {
     modalEl.style.visibility = "hidden";
   }
  