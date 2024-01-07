$("#btn-nav").on("click", () => {
  if ($("#menu:visible").length) {
    $("#btn-nav").css("transform", "rotate(0deg)");
    $("#menu")
      .hide("slow", () => {
        $("#menu").removeClass("nav__menu-visible").addClass("nav__menu-hidden");;
      });
  } else {
    $("#btn-nav").css("transform", "rotate(90deg)");
    $("#menu").show("slow");
    $("#menu").removeClass("nav__menu-hidden").addClass("nav__menu-visible");
  }
});

const movies = await fetch("./movies.json")
                .then(response => response.json());

movies.forEach(movie => {
  const movieCard = $("<div></div>").addClass("movies__movie-card");
  const cover = $("<img />")
    .attr("width", "140")
    .attr("height", "200")
    .attr("src", movie.cover)
    .attr("alt", `Cover ${movie.title}`)
    .addClass("cover__movie-card");

  movieCard.append(cover);

  const content = $("<div></div>").addClass("movie-card__content-movie");

  const categories = $("<div></div>")
    .text(movie.categories.join(", "))
    .addClass("content-movie__categories");
  const title = $("<h3></h3>")
    .text(movie.title)
    .addClass("content-movie__title");

  const imdb = $("<div></div>")
    .text("IMDB: ").addClass("content-movie__imdb");
  const score = $("<span></span>")
    .text(Number(movie.imdb).toPrecision(2))
    .addClass("imdb__score");
  imdb.append(score);

  const description = $("<p></p>")
    .text(movie.description)
    .addClass("content-movie__description");

  const btnWatch = $("<button></button>")
    .attr("type", "button")
    .attr("title", `Watch ${movie.title}`)
    .text("Watch")
    .addClass("btn-watch btns-movie__btn-watch");
  const btnDetail = $("<button></button>")
    .attr("type", "button")
    .attr("title", `Details ${movie.title}`)
    .text("Details")
    .addClass("btns-movie__btn-details");

  const btns = $("<div></div>")
    .addClass("content-movie__btns-movie")
    .append(btnWatch, btnDetail);

  content.append(categories, title, imdb, description, btns);

  movieCard.append(content);
  $("#movies").append(movieCard);
});