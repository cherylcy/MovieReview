const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0fcecbdd285ab8c106fb35d7e9bd0b5d&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=0fcecbdd285ab8c106fb35d7e9bd0b5d&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function retrunMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        if (element.poster_path === null) return;
        // const div_row = document.createElement("div");
        // div_row.setAttribute("class", "row");
        const div_column = document.createElement("div");
        div_column.setAttribute("class", "column");
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");
        // const center = document.createElement("center");
        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        image.setAttribute("id", "image");
        const title = document.createElement("h4");
        title.setAttribute("id", "title");

        let titleText = element.title;
        if (titleText.length > 40) {
          titleText = titleText.slice(0, 40) + "...";
          title.setAttribute("title", element.title);
        }
        title.innerHTML = `${titleText}`;
        image.src = IMG_PATH + element.poster_path;

        // center.appendChild(image);
        // div_card.appendChild(center);
        div_card.appendChild(image);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        // div_row.appendChild(div_column);

        // main.appendChild(div_row);
        main.appendChild(div_column);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    retrunMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
