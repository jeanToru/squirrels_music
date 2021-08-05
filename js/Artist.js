class Artist {
  constructor(id, name, image, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  AddArtistDOM() {
    const contentDoom = document.querySelector('.artist');
    const content = `
      <div id="${this.id}" class="artist_content">
        <img class="artist_content--album" src="${this.image}" alt="">
        <h2 id="${this.id}" class="artist_content--name">${this.name}</h2>
      </div>
    `;
   contentDoom.innerHTML += content;
  }
  AddDescriptiontDOM() {
    const contentArtist = document.querySelector('.box__content');
    const content = `
    <h1>${this.name}</h1>
    <img src="${this.image}" alt="">
    <p>${this.description}</p>
    `
    contentArtist.innerHTML += content;
  }
}

export default Artist;
