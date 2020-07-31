const songsLi = document.querySelectorAll("li");
console.log(songs);

for (const song of songsLi) {
  song.setAttribute("class", "music");
}
