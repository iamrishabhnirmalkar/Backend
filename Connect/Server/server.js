import express from "express";

const app = express();
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes
// https://jsonformatter.org/ {use this website to read APIS}

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is a  another joke",
    },
    {
      id: 3,
      title: "third joke",
      content: "This is a  third joke",
    },
    {
      id: 4,
      title: "fourth joke",
      content: "This is a  fourth joke",
    },
    {
      id: 5,
      title: "fiveth joke",
      content: "This is a  fiveth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
