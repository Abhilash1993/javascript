const body = document.getElementsByTagName("body")[0];
const timerDiv = document.createElement("div");

for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    timerDiv.innerHTML = i;
    body.append(timerDiv);
  }, 1000 * i);
}
