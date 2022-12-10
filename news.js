const pictureCount = 5 + +Math.random().toString()[5];

const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-11-01&" +
  "sortBy=popularity&" +
  "apiKey=c0e01f533816447ba96880af97f1e169";

const req = new Request(url);

const requestNews = async () => {
  const response = await fetch(req);
  const { articles } = await response.json();
  for (let i = 0; i <= pictureCount; i++) {
    document
      .getElementsByClassName("content")[0]
      .insertAdjacentHTML(
        "afterbegin",
        `<a class="newsStory"  href="${articles[i].url}"><h1>${articles[i].title}</h1><p>${articles[i].description}</p><p class="author">${articles[i].author}</p></a>`
      );
  }
};
requestNews();
