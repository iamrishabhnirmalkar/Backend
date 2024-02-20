import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      category: "Programming",
      joke: "Why don't programmers like nature? It has too many bugs.",
    },
    {
      id: 2,
      category: "Programming",
      joke: "Why was the JavaScript developer sad? Because he didn't know how to `null` his feelings.",
    },
    {
      id: 3,
      category: "Programming",
      joke: "Why do Java developers wear glasses? Because they can't C#!",
    },
    {
      id: 4,
      category: "Dad Jokes",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 5,
      category: "Dad Jokes",
      joke: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 6,
      category: "Dad Jokes",
      joke: "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
    },
  ];
  res.send(joke);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnging of port ${port}`);
});
