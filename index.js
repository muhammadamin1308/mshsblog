import express from "express";
import bodyParser from "body-parser";
import moment from "moment"

const app = express();
const port = 3000;
const date = new Date();
// let posts = []
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/all-post", (req, res) => {
  res.render("posts.ejs");
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
let posts = [
  {
    titlePost: newPostTitle,
    contentPost: newPostContent,
  }]
  // posts.push(postObj)
  // console.log(posts)
  res.render("posts.ejs", { posts: posts, pTitle: posts.titlePost, pContent: posts.contentPost, moment: moment });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
