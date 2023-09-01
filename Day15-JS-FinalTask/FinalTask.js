// // Create a function to group song based on artists
// function groupArtist() {
//   const artistName = songList.filter((penyanyi) => penyanyi.artist === 'Billie Eilish');
//   console.log('==================Group Artis==================');
//   console.log(artistName);
//   console.log();
// }

// // Create a function to group song based on genre
// function groupGenre() {
//   const genreName = songList.filter((genre) => genre.genre === 'Indie Folk');
//   console.log('==================Group Genre==================');
//   console.log(genreName);
// }

// // Create a function to group song to play song less than 1 hour with random artists & genre
// function groupPlaySong() {
//   const durationSong = songList.reduce((play, durasi) => play + durasi.duration, 0);
//   console.log('Total Duration:  ', durationSong);
//   if (durationSong < 3600){

//   }
// }

// // groupArtist();
// // groupGenre();
// groupPlaySong();

// Mid task of JavaScript. Will include all previous day's learning:
// Create a variable with type array of object to save song lists with song details

const songList = [
  {
    title: 'Before',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 234,
  },
  {
    title: 'High School In Jakarta',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 219,
  },
  {
    title: 'Backburner',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 236,
  },
  {
    title: 'Keeping Tabs',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 237,
  },
  {
    title: 'Anaheim',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 292,
  },
  {
    title: 'Ocean & Engines',
    artist: 'NIKI',
    genre: 'Indie Folk',
    duration: 336,
  },
  {
    title: 'Getting Older',
    artist: 'Billie Eilish',
    genre: 'Pop',
    duration: 244,
  },
  {
    title: 'Happier Than Ever',
    artist: 'Billie Eilish',
    genre: 'Pop',
    duration: 298,
  },
  {
    title: 'Shallow',
    artist: 'Lady Gaga',
    genre: 'Pop',
    duration: 215,
  },
  {
    title: 'Secret Love Song',
    artist: 'Little Mix',
    genre: 'R&B',
    duration: 239,
  },
  {
    title: 'Power',
    artist: 'Little Mix',
    genre: 'R&B',
    duration: 2070,
  },
];

// Create a function to group song based on artists
function groupArtist() {
  const artistName = songList.filter((penyanyi) => penyanyi.artist === 'Billie Eilish');
  console.log('==================Group Artis==================');
  console.log(artistName);
  console.log();
}

// Create a function to group song based on genre
function groupGenre() {
  const genreName = songList.filter((genre) => genre.genre === 'Pop');
  const genreNames = songList.filter((genre) => genre.genre === 'R&B');
  console.log('==================Group Genre==================');
  console.log(genreName);
  console.log(genreNames);
}

// Create a function to group song to play song less than 1 hour with random artists & genre
function groupPlaySong(songs) {
  let totalSongList = [];
  durationSong = 0;
  for (let i = 0; i < songs.length; i++) {
    let randomSong = Math.floor(Math.random() * songs.length);
    durationSong += songs[i].duration;
    // console.log(durationSong);
    if (durationSong <= 3600) {
      totalSongList.push({
        title: songs[randomSong].title,
        artist: songs[randomSong].artist,
        genre: songs[randomSong].genre,
        duration: songs[randomSong].duration,
      });
    } else {
      return 'Lagu Lebih dari 1 jam';
    }
  }
  return totalSongList;
}

groupArtist();
groupGenre();
console.log(groupPlaySong(songList));
console.log(songList);
