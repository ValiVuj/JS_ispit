 const forma = document.getElementById("form");
 const tekstualniInput = document.getElementById("input");
 const glavniDiv = document.getElementById("main");
 
 
 fetchSong("https://itunes.apple.com/search?term=jack+johnson");

 function fetchSong(url) {
    fetch(url).then(response => response.json())
    .then(function (data) {
      console.log(data);
      data.results.forEach((element) => {
      let imeArtista = document.createElement("div");
      let imePjesme = document.createElement("h4");
      let cijena = document.createElement("h4");

      imeArtista.innerHTML = `${element.artistName}`;
      imePjesme.innerHTML = `${element.trackName}`;
      cijena.innerHTML = `${element.trackPrice}`;

      imeArtista.appendChild(imePjesme);
      imeArtista.appendChild(cijena);
      glavniDiv.appendChild(imeArtista);

    })}) 
 };

 forma.addEventListener("submit", (event) => {
   event.preventDefault();
   glavniDiv.innerHTML= "";

   const pretraga = tekstualniInput.value;
   console.log(tekstualniInput);
   if (pretraga) {
      fetchSong(`https://itunes.apple.com/search?term=${pretraga}`)
      tekstualniInput.value = ""
   }
   else {
      main.innerHTML = "Ne postoji"
   }
 })

 