const pictureCount = 5 + +Math.random().toString()[5];
for (let i = 0; i <= pictureCount; i++) {
  document
    .getElementsByClassName("imgContainer")[0]
    .insertAdjacentHTML(
      "afterbegin",
      `<img src="https://picsum.photos/300?dummy=${Math.random()}" alt="">`
    );
}
