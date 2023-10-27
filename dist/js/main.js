const getRandomJoke = async () => {
  const url = "https://icanhazdadjoke.com/";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  const joke = data.joke;
  return joke;
};

const displayJoke = (joke) => {
  const h1 = document.querySelector("h1");
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomJoke();
  displayJoke(joke);
};

refreshJoke();

setInterval(refreshJoke, 3000);
