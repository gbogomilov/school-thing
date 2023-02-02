const pictureCount = Math.random() * (10 - 5) + 5;
for (let i = 0; i <= pictureCount; i++) {
  document
    .getElementsByClassName('imgContainer')[0]
    .insertAdjacentHTML(
      'afterbegin',
      `<img src="https://picsum.photos/300?dummy=${Math.random()}" alt="">`
    );
}
console.log('ivakas');
