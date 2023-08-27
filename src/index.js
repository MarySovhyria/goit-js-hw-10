import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';



const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

 fetchBreeds()
   .then(response => {
     const breeds = response.data;
    breeds.forEach(breed => {
         const option = document.createElement('option')
         option.value = breed.id;
         option.textContent = breed.name;
         breedSelect.appendChild(option);
        
     });
   })
  .catch(() => {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
     loader.style.display = "none";
       });

// handling breed selection 
breedSelect.addEventListener('change', () => {
    const breedSelectId = breedSelect.value;
    loader.style.display = 'block';


fetchCatByBreed(breedSelectId)
    .then( response => {
        const cat = response.data[0];
        const element = [
            ` <img src = "${cat.url}" alt ="${cat.breeds[0].name}" class = "image"></img>`,
            `<div class = "box"><h2>${cat.breeds[0].name}</h2>`,
            `<p>${cat.breeds[0].description}</p>`,
            `<p>${cat.breeds[0].temperament}</p></div>`

        ]
      
        
        const container = document.querySelector('.cat-info');
        const elementsHTML = element.join("");
        container.innerHTML = elementsHTML;
        

        loader.style.display = "none";

    })
    .catch (() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');;
        loader.style.display = "none";
    })
});





