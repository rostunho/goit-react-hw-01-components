function randomColor() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

export default randomColor;
