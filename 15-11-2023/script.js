const roboProdGen = (roboData) => {
    try {

      const wrapperEl = document.createElement("div");
      const imgEl = document.createElement("img");
      const textEl = document.createElement("div");
      const priceEl = document.createElement("p");
      const nameEl = document.createElement("h4");
  
      wrapperEl.className = "robo";
      imgEl.src = roboData.imageUrl;
      imgEl.alt = roboData.roboName;
      textEl.className = "text";
      priceEl.textContent = roboData.price + "$";
      nameEl.textContent = roboData.roboName;
      

      textEl.append(priceEl, nameEl);
      wrapperEl.append(textEl, imgEl);
  
      return wrapperEl;

    }  catch (error) {
      console.error("Errore generico", error.message);
      return null;
    }
};
  
    const recommendedSection = document.createElement("section");
    recommendedSection.className = "recommended";
  
    const headingEl = document.createElement("h3");
    headingEl.textContent = "Adotta un cucciolo!";
    recommendedSection.appendChild(headingEl);
  
    const roboListDiv = document.createElement("div");
    roboListDiv.className = "robo-list";
    recommendedSection.appendChild(roboListDiv);
  
  const mockData = [
    {
      id: 1,
      roboName: "MicioMiao ❤️",
      price: 1,
      imageUrl: "http://placekitten.com/290/290",
    },
    {
      id: 2,
      roboName: "Figaro 🩵",
      price: 1,
      imageUrl: "http://placekitten.com/g/250/250",
    },
    {
      id: 3,
      roboName: "Max 🩷",
      price: 1,
      imageUrl: "https://placedog.net/300/300",
    },
    {
      id: 4,
      roboName: "Lilli 🩶",
      price: 1,
      imageUrl: "https://placedog.net/280/280",
    },
  ];
  
  const roboListEl = document.querySelector(".robo-list");


  mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));
 

 
 mockData.forEach((robo)=> {
    roboListEl.appendChild(roboProdGen(robo));
 });
  
   const recommended = document.querySelector(".recommended");
    for (let i = 0; i < mockData.length; i++) {
      recommended.innerHTML += `
        <div class="card">
           <img src="${mockData[i].imageUrl}" />
         <h3>
            <span class="card_roboName-number">01.</span>
           ${mockData[i].roboName}
          </h3>
          <button><ion-icon name="add-circle-outline"></ion-icon></button>
        </div>
      `;
    }