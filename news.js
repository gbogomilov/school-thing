const pictureCount = Math.random() * (10 - 5 + 1) + 5;

const url = 'https://api.newscatcherapi.com/v2/search?q=Tesla';

const requestNews = async () => {
  const response = await fetch(url, {
    headers: { 'x-api-key': 'pdEuD4dHdsKq5q2ah22RwfmjuCoFzvUx2sGppULytJU' },
    'Content-Type': 'application/json',
  });

  const { articles } = await response.json();
  for (let i = 0; i <= pictureCount; i++) {
    document
      .getElementsByClassName('content')[0]
      .insertAdjacentHTML(
        'afterbegin',
        `<a class="newsStory"  href="${articles[i].link}"><h1>${articles[i].title}</h1><p>${articles[i].summary}</p><p class="author">${articles[i].author}</p></a>`
      );
  }
};
requestNews();
