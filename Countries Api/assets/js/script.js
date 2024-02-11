let body = document.body;
let cards = document.querySelector(".countries__cards");
let button = document.querySelector(".countries__navbar-buttons");
let lightButton = document.querySelector(".countries__navbar-buttons--none ");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countries) => {
    countries.forEach((e) => {
      let country = e.name.common;
      let population = e.population;
      let capital = e.capital?.[0];
      let region = e.region;
      let img = e.flags.svg;
      //     console.log(country);
      let newCard = createCard(country, population, capital, region, img);
      cards.insertAdjacentHTML("beforeend", newCard);
    });
    console.log(countries);
  });
function createCard(country, population, capital, region, img) {
  return `
     <div class="countries__card">
       <div class="countries__card-img">
         <img src="${img}" alt="country"/>
       </div>
       <div class="countries__card-content">
         <h4 class="countries__card-title">${country}</h4>
         <p class="countries__card-population">
           Population: <span class="population-value">${population}</span>
         </p>
         <p class="countries__card-region">
           Region: <span class="region-value">${region} </span>
         </p>
         <p class="countries__card-capital">
           Capital: <span class="capital-value">${capital || "-"}</span>
         </p>
       </div>
   </div>`;
}

button.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  if (true) {
    lightButton.style.display = "block";
    button.style.display = "none";
  } else {
    lightButton.style.display = "none";
    button.style.display = "block";
  }
});
lightButton.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  if (true) {
    lightButton.style.display = "none";
    button.style.display = "block";
  } else {
    lightButton.style.display = "block";
    button.style.display = "none";
  }
});
