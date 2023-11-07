import express from "express"
import axios from "axios"

const app = express();
const port = 3000;

app.use(express.static("public")) // declare public folder
app.use(express.urlencoded({extended:true})) // using default middleware

app.get ('/', (req, res) => {
    res.render("index.ejs");
})









app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})