const express = require("express");
const app = express();
const tokenRoutes = require("./routes/tokenRoutes");

app.use(express.json());
app.use("/api", tokenRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
