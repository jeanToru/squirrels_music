import Artist from './Artist.js';

const url = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((artist) => {
      const artists = new Artist(artist.id, artist.name, artist.image, artist.description);
      artists.AddArtistDOM();
    });
  });