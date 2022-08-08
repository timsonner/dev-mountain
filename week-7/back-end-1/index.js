const express = require("express");
const cors = require("cors");
const app = express();
// middleware
app.use(express.json());
app.use(cors());

// endpoints
// ex: http://localhost:4000/api/users
app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

// ex: http://localhost:4000/weather/hotterthanballs
app.get("/weather/:temperature", (req, res) => {
    // use object destructuring here
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });
  
// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

// to run: nodemon server/index
app.listen(4000, () => {
  console.log(`Server running on port: 4000`);
});
