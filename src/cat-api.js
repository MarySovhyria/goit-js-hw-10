import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_1W1WHIZWPsSP9vbG7Lp0cvVfqeFrEejeS5YupvUSHYWFAaAVcNr87pUC1tMtGXY1";

export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds");
}

export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
}