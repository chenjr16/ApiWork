// document.getElementById("btn").addEventListener("click", function () {
//   const URL = "https://random-data-api.com/api/users/random_user?size=10";
//   fetch(URL)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       //let users = data;
//       console.log(data);
//       //displayData(data);
//     });

//   function displayData(users) {
//     const usersDivs = users.map(function (user) {
//       const {
//         username,
//         avatar,
//         employment: { title },
//       } = user;
//       return `<div>
//         <p> ${username}</p>
//         <img src="${avatar}"/>
//         <p>${title}</p>
//         <div>`;
//     });
//     document.getElementById("app").innerHTML = usersDivs;
//   }
// });

document.getElementById("search").addEventListener("click", function () {
  const input = document.getElementById("input").value;
  let card = document.createElement("div");
  card.classList.add("card");
  let title = document.createElement("div");
  title.classList.add("card-header");
  title.innerHTML = input;
  card.appendChild(title);

  let button1 = document.createElement("button");
  button1.setAttribute("type", "button");
  button1.classList.add("btn", "btn-primary");
  button1.innerHTML = "Movie";
  card.appendChild(button1);
  const movieApi = "?i=tt3896198&apikey=c68b0b27";
  let movieUrl = `https://www.omdbapi.com/${movieApi}&s=${input}`;
  button1.addEventListener("click", function () {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((json) => {
        json.Search.map((img) => img.Poster).forEach((Poster) => {
          let img = document.createElement("img");
          img.src = Poster;
          document.getElementById("display").appendChild(img);
        });
      });
  });

  let button2 = document.createElement("button");
  button2.setAttribute("type", "button");
  button2.classList.add("btn", "btn-success");
  button2.innerHTML = "Gif";
  card.appendChild(button2);
  const giphyApi = "WXeYPTmzJJLhsLNX7K7gpnex8Qeb9XuF";
  const limit = 5;
  let url = `https://api.giphy.com/v1/stickers/search?q=${input}&api_key=${giphyApi}&limit=${limit}`;
  button2.addEventListener("click", function () {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.data
          .map((gif) => gif.images.fixed_height.url)
          .forEach((url) => {
            let img = document.createElement("img");
            img.src = url;
            document.getElementById("display").appendChild(img);
          });
      })
      .catch((error) => (document.body.appendChild = error));
  });

  let button3 = document.createElement("button");
  button3.setAttribute("type", "button");
  button3.classList.add("btn", "btn-danger");
  button3.innerHTML = "Remove";
  card.appendChild(button3);
  button3.addEventListener("click", function () {
    document.getElementById("display").remove();
  });

  document.getElementById("cards").appendChild(card);
});
