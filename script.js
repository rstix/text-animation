const text = document.querySelector(".fancy");
const splitText = text.textContent.split("");
console.log(splitText);
text.innerHTML = "";

splitText.forEach(c => (text.innerHTML += `<span>${c}</span>`));

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
  const span = document.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
