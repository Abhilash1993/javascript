function getData() {
  return fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}
getData().then((data) => {
  addToDOM(data);
});

function addToDOM(data) {
  const body = document.getElementsByTagName("body")[0];
  const ul = document.createElement("ul");
  ul.style.width = "200px";
  ul.style.margin = "0 auto";
  for (let i = 0; i < data.length; i++) {
    const li = addNewListItem(data[i].login, i);
    ul.appendChild(li);
  }
  body.appendChild(ul);
  function addNewListItem(data, id) {
    const li = document.createElement("li");
    li.innerHTML = data;
    li.id = id;
    li.style.listStyleType = "none";
    li.style.textAlign = "left";
    li.style.padding = "5px";
    return li;
  }
}
