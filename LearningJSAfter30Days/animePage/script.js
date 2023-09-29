const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};
const url =
  "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Attack&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    contentFiller(response);
  })
  .catch((err) => console.log(err));


// function contentFiller(data){
//     const ele = document.getElementById('searchResults_section_id');
//     const newEle = document.createElement('div');
//     newEle.innerHTML= data[0].

//     ele.appendChild(newEle);

// }