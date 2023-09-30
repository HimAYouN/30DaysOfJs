

// var dataReturned = [];
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3b385c1a4dmsh1b21ed9aaa71340p174110jsn9c45bb2b414e",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};
const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Attack&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // dataReturned = response.data;
    apiCalled(response.data);
  })
  .catch((err) => console.log(err));




























// const data = [
//     {
//       _id: '38573',
//       title: 'Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki desu ka?',
//       alternativeTitles: [
//         'Do You Like Your Mom? Her Normal Attack is Two Attacks at Full Power',
//         'Okaa-san Online',
//         '通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？',
//         'Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?',
//         'Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?',
//         'Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?',
//         'Do You Love Your Mom and Her Two-Hit Multi-Target Attacks?'
//       ],
//       ranking: 11118,
//       genres: [ 'Adventure', 'Comedy', 'Fantasy', 'Ecchi' ],
//       episodes: 12,
//       hasEpisode: true,
//       hasRanking: true,
//       image: 'https://cdn.myanimelist.net/images/anime/1225/102250.webp',
//       link: 'https://myanimelist.net/anime/38573/Tsuujou_Kougeki_ga_Zentai_Kougeki_de_Ni-kai_Kougeki_no_Okaasan_wa_Suki_desu_ka',
//       status: 'Finished Airing',
      
//       thumb: 'https://cdn.myanimelist.net/r/50x70/images/anime/1225/102250.webp?s=5338ab6ef5ac615a22857bcec436c1ca',
//       type: 'TV'
//     },
//     {
//       _id: '35122',
//       title: 'Shingeki no Kyotou',
//       alternativeTitles: [
//         'Shingeki no Kyojin: Attack on Skytree',
//         'Attack on Titan',
//         '進撃の巨塔',
//         'Attack on Skytree'
//       ],
//       ranking: 7347,
//       genres: [ 'Action', 'Fantasy' ],
//       episodes: 1,
//       hasEpisode: true,
//       hasRanking: true,
//       image: 'https://cdn.myanimelist.net/images/anime/3/84716.webp',
//       link: 'https://myanimelist.net/anime/35122/Shingeki_no_Kyotou',
//       status: 'Finished Airing',
      
//       thumb: 'https://cdn.myanimelist.net/r/50x70/images/anime/3/84716.webp?s=d9949c512710cbe28364765e3a0d87c3',
//       type: 'Movie'
//     },
//     {
//       _id: '40028',
//       title: 'Shingeki no Kyojin: The Final Season',
//       alternativeTitles: [
//         'Shingeki no Kyojin Season 4',
//         'Attack on Titan Season 4',
//         '進撃の巨人 The Final Season',
//         'Attack on Titan: Final Season',
//         'Attack on Titan Final Season',
//         'Ataque a los Titanes Temporada Final',
//         "L'Attaque des Titans Saison Finale"
//       ],
//       ranking: 36,
//       genres: [ 'Action', 'Drama' ],
//       episodes: 16,
//       hasEpisode: true,
//       hasRanking: true,
//       image: 'https://cdn.myanimelist.net/images/anime/1000/110531.webp',
//       link: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season',
//       status: 'Finished Airing',
      
//       thumb: 'https://cdn.myanimelist.net/r/50x70/images/anime/1000/110531.webp?s=cc9eb3ae70821928b0607c73674ab65c',
//       type: 'TV'
//     },
//     {
//       _id: '36702',
//       title: 'Shingeki no Kyojin Season 2 Movie: Kakusei no Houkou',
//       alternativeTitles: [
//         'Attack on Titan Season 2 Movie: The Roar of Awakening',
//         '劇場版 進撃の巨人 Season2〜覚醒の咆哮〜',
//         'Attack on Titan: The Roar of Awakening',
//         'Attack on Titan Film Teil 3: Gebrüll des Erwachens',
//         'Ataque a los Titanes Temporada 2. La Película: El Rugido del Despertar',
//         "L'Attaque des Titans Saison 2 - Film 3: Le Rugissement de l'Éveil"
//       ],
//       ranking: 858,
//       genres: [ 'Action', 'Drama' ],
//       episodes: 1,
//       hasEpisode: true,
//       hasRanking: true,
//       image: 'https://cdn.myanimelist.net/images/anime/1710/95650.webp',
//       link: 'https://myanimelist.net/anime/36702/Shingeki_no_Kyojin_Season_2_Movie__Kakusei_no_Houkou',
//       status: 'Finished Airing',
      
//       thumb: 'https://cdn.myanimelist.net/r/50x70/images/anime/1710/95650.webp?s=aa35ad5da5b5d75c8290e4488e6bf8c5',
//       type: 'Movie'
//     }
//   ]

function apiCalled(dataReturned){

  // console.log(dataReturned)
    // Get a reference to the parent element where you want to append the sections
    const parentElement = document.getElementById("searchResults_section_id");
    
    // Loop through the data and create a section for each data object
    dataReturned.forEach((animeData) => {
      // Create a new section element
      const section = document.createElement("div");
      section.classList.add("anime-section"); // Optionally, add a class to the section
    
      // Create and append HTML content for the section based on the data
      section.innerHTML = `
        <img src=${animeData.image}>
        <h2>${animeData.title}</h2>
        <p>Ranking: ${animeData.ranking}</p>
        <p>Genres: ${animeData.genres.join(', ')}</p>
        <p>Episodes: ${animeData.episodes}</p>
        <p>Status: ${animeData.status}</p>
        <p>Type: ${animeData.type}</p>

      `;
    
      // Append the section to the parent element
      parentElement.appendChild(section);
    });
  
}