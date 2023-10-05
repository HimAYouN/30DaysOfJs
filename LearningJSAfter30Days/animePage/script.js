var searchElement = "";
const inputElement = document.getElementById("inputElementID");
const searchButton = document.getElementById("searchButtonID");
const loadingAnimation = document.getElementById("loading-animation");
const box = document.getElementById("box");
 

function handleSearch() {
  const searchValue = inputElement.value;
  callTheAPI(searchValue);
}

searchButton.addEventListener("click", handleSearch);
inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleSearch();
  }
});

function callTheAPI(searchElement) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };
  const url =
    "https://anime-db.p.rapidapi.com/anime?page=1&size=12&search=" +
    searchElement;
  // console.log(url);
  loadingAnimation.style.display = "block";
  box.style.display = "block";
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      loadingAnimation.style.display = "none";
      box.style.display = "none";
      // dataReturned = response.data;
      clearPreviousELements();
      apiCalled(response.data);
    })
    .catch((err) => {
      console.log(err);
      loadingAnimation.style.display = "none";
      box.style.display = "none";
    });
}

function apiCalled(dataReturned) {
  // console.log(dataReturned)
  // Get a reference to the parent element where you want to append the sections
  const parentElement = document.getElementById("searchResults_section_id");

  // Loop through the data and create a section for each data object
  dataReturned.forEach((animeData, index) => {
    // Create a new section element
    const section = document.createElement("div");
    section.classList.add("anime_section", "card", "shadow-sm"); // Optionally, add a class to the section
    section.id = "anime_section_ID_" + index;
    // Create and append HTML content for the section based on the data
    section.innerHTML = 
    `
      <img class=${"imgClass"} src=${animeData.image}>
      <h2>${animeData.title}</h2>
      <p>Ranking: ${animeData.ranking}</p>
      <p>Genres: ${animeData.genres.join(", ")}</p>
      <p>Episodes: ${animeData.episodes}</p>
      <p>Status: ${animeData.status}</p>
      <p>Type: ${animeData.type}</p>
       
      `;
      // <p>${"Link: "}<a href="${animeData.link}" target="_blank" className="${searchButton}">${"CLICK HERE"}</a>${"!!!ANOTHER SITE!!!"}</p>

    // Append the section to the parent element
    parentElement.appendChild(section);
  });
}

function clearPreviousELements() {
  const parentElement = document.getElementById("searchResults_section_id");

  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

//Automaticalls calls the first api call on load

callTheAPI("");



window.addEventListener('load', ()=>{
  
})