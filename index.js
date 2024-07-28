import express from "express";
import bodyParser from "body-parser";
import moment from "moment"

const app = express();
const port = 3000;

let posts = []

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/all-post", (req, res) => {
  // res.render("posts.ejs");
  res.render("posts.ejs", {newPostContent: posts, moment: moment });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/all-post", (req, res) => {
  const newPostTitle = req.body.postTitle;
  const newPostContent = req.body.postContent;
  const postObj = {
    title: newPostTitle,
    content: newPostContent
  };

  posts.push(postObj)
  res.render("posts.ejs", {newPostContent: posts, moment: moment });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
