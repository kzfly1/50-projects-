const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await fetch("https://icanhazdadjoke.com", config);
    if (!res.ok) throw new Error("Joke not found");

    const data = await res.json();
    // console.log(data);
    joke.innerHTML = data.joke;
  } catch (error) {
    console.log(`Something is wrong ${error.message}`);
  }
};

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
