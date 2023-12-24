const movies = await fetch("./movies.json").then(response => response.json());
const moviesEl = document.getElementById("movies");

movies.forEach(movie => {
  const movieCard = document.createElement("div");
  movieCard.className = "movies__movie-card";

  const cover = document.createElement("img");
  cover.width = 140;
  cover.height = 200;
  cover.src = movie.cover;
  cover.className = "cover__movie-card";

  movieCard.appendChild(cover);

  const content = document.createElement("div");
  content.className = "movie-card__content-movie";

  const categories = document.createElement("div");
  categories.innerText = movie.categories.join(", ");
  categories.className = "content-movie__categories";
  content.appendChild(categories);

  const title = document.createElement("h3");
  title.className = "content-movie__title";
  title.innerText = movie.title;
  content.appendChild(title);

  const imdb = document.createElement("div");
  imdb.className = "content-movie__imdb";
  imdb.innerText = "IMDB: ";

  const score = document.createElement("span");
  score.className = "imdb__score";
  score.innerText = Number(movie.imdb).toPrecision(2);
  imdb.appendChild(score);
  content.appendChild(imdb);

  const description = document.createElement("p");
  description.className = "content-movie__description";
  description.innerText = movie.description;
  content.appendChild(description);

  const btns = document.createElement("div");
  btns.className = "content-movie__btns-movie";

  const btnWatch = document.createElement("button");
  btnWatch.type = "button";
  btnWatch.title = "Watch " + movie.title;
  btnWatch.classList.add("btn-watch", "btns-movie__btn-watch");
  btnWatch.innerText = "Watch";
  btns.appendChild(btnWatch);

  const btnDetail = document.createElement("button");
  btnDetail.type = "button";
  btnDetail.title = "Details " + movie.title;
  btnDetail.className = "btns-movie__btn-details";
  btnDetail.innerText = "Details";
  btns.appendChild(btnDetail);

  content.appendChild(btns);

  movieCard.append(content);
  moviesEl.appendChild(movieCard);
})