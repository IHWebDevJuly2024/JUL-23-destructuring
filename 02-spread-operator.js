const popArtists = [
  "Taylor Swift",
  "Ariana Grande",
  "Justin Bieber",
  "Dua Lipa",
];
const rockArtists = ["Queen", "Led Zeppelin", "AC/DC", "Guns N' Roses"];

const reggaeArtists = [
  "Bob Marley",
  "Peter Tosh",
  "Toots and the Maytals",
  "Jimmy Cliff",
];

//const allArtists = popArtists.concat(rockArtists, reggaeArtists); // we can concatenate two arrays like this

// The three dots :

const allArtists = [...popArtists, ...reggaeArtists, ...rockArtists];
console.log(allArtists);
