import Artist from './Artist.js';
import Song from './songs.js';

const url = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
let formTotal =  document.querySelector('.container__form');
let form =  document.querySelector('.box__content');


fetch(url)
.then((response) => response.json())
  .then((data) => {
    data.forEach((artistSong) => {
      const artists = new Artist(artistSong.id, artistSong.name, artistSong.image, artistSong.description);
      artists.AddArtistDOM();
    });
     callSongs();
  });
  
function passId(id) {
  const URLSONG = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/`;

  const contentUser = document.querySelector('.songs');
  contentUser.classList.remove('js__none');
  fetch(`${URLSONG}${id}`, {
    method: "GET"
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((songList) => {
      const songs = new Song(songList.id, songList.name, songList.album, songList.image, songList.audio);
      console.log(songs)
      songs.addSongDOM();
    })
  })
  .catch((error) => {
    console.log("error", error);
  })
  
}

function callSongs(){
  const clickSong = document.querySelector('.artist');
  clickSong.addEventListener('click', (event) => {
    const target = event.target;
    if(target.className === 'artist_content--name') {
      const idSong = target.getAttribute('id')
      const artist = document.querySelector('.artist');
      formTotal.classList.add('js__none');
      form.classList.add('js__none');
      artist.classList.add('js__none');
      passId(idSong)

    }
  })
}
