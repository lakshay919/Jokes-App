const jokeText = document.querySelector("p");
const btn = document.querySelector("button");

let GenerateJoke = () => {
    let url = fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist&type=single");
    url.then(response => response.json()).then(data => {
        jokeText.textContent = `${data.joke}`
});
};

btn.addEventListener("click", GenerateJoke)
GenerateJoke()