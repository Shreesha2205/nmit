const express = require("express");
const fetchData = require("./fetchdata");

const app = express();
const port = 3000;

app.get("/api/achievements", async (req, res) => {
  const data = await fetchData();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
