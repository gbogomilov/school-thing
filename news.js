const pictureCount = Math.random() * (10 - 5) + 5;
const url =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tesla&api-key=V9qaHgBtj8mV53q3OESAzJS5DAxlwWvd';

const requestNews = async () => {
  const res = await fetch(url);

  const data = await res.json();
  const docs = data.response.docs;
  for (let i = 0; i <= pictureCount; i++) {
    console.log(docs[i]);
    document
      .getElementsByClassName('content')[0]
      .insertAdjacentHTML(
        'afterbegin',
        `<a class="newsStory"  href="${docs[i].web_url}"><h1>${docs[i].headline.main}</h1><p>${docs[i].snippet}</p><p class="author">${docs[i].source}</p></a>`
      );
  }
};
requestNews();
