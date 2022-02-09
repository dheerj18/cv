const express = require("express");
const app = express();
app.use(express.static("public"));
// app.post("/", function (req, res) {
//   res.querySelector(".button").addEventListener("click", function () {
//     res.querySelector(".collapse").classList.remove("collapse");
//     setTimeout(function () {
//       res.querySelector(".collapse-horizontal").classList.add("collapse");
//     }, 10000);
//   });
// });
app.get("/", function (req, res) {
  // res.send("Rendering File");
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000 || process.env.PORT, function () {
  console.log("Server running");
});
