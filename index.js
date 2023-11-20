import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
let word = '';
let data = {};
let error = {};

app.use(express.static("public")); // declare public folder
app.use(express.urlencoded({ extended: true })); // using default middleware

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/result", (req, res) => {
//   console.log(data.meanings);
res.render("index.ejs", { data,error,word });
});

app.post("/searching", async (req, res) => {
data = {};
   word = req.body.searchBox;
  
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      data = response.data[0];
        console.log("hay:",data);
    
} catch (err) {
    // console.log(err.response.data)
    error = err.response.data;
    
  }
  res.redirect("/result");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
