const getRandomJoke = async () => {
  const url = "/.netlify/functions/jokes";
  const response = await fetch(url);
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
