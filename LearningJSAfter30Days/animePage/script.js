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


function contentFiller(data){
    const ele = document.getElementById('searchResults_section_id');
    const newEle1 = document.createElement('div');
    const newEle2 = document.createElement('div');
    const newEle3 = document.createElement('div');
    const newEle4 = document.createElement('img');

    newEle1.innerHTML= data.data[0].title;
    newEle2.innerHTML= data.data[0].genres;
    newEle3.innerHTML= data.data[0].episodes;

    ele.appendChild(newEle4);
    ele.appendChild(newEle1);
    ele.appendChild(newEle2);
    ele.appendChild(newEle3);

}