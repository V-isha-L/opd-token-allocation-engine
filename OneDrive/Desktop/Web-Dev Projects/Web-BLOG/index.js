import express from "express"

const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

let blogs = [
  {id:0,title:"Blog-Details",body:"A blog is a website or page that is a part of a larger website. Typically, it features articles written in a conversational style with accompanying pictures or videos.Blogging has gained immense popularity due to its enjoyable and adaptable nature, allowing for self-expression and social connections. In addition, it serves as a platform for enhancing writing skills and promoting businesses.Furthermore, a professional blogger can even make money from blogging in various ways, such as Google ads and Amazon affiliate links. Successful blogs can cover any topic. No matter what subject you can think of, there’s likely already a profitable blog dedicated to it.If there is none, this is where you come in. New bloggers who can find a unique niche to create content about have a higher chance of surviving in the competitive blogging world. Preferably, you should be passionate about or an expert in your blog niche. However, don’t worry if you are having a difficult time pinning down a topic – this article will help you.In this article, we will explore 11 types of blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education, business and marketing, finance and investment, food, travel, photography, and art and design.We will include five of the best blog examples for each type, discuss each blog example briefly, and highlight what we can learn from the blog. We will also include the info on how it is build, for example, whether a CMS like WordPress was used or a blogging platform.",author:"thorfinn"},
  {id:1,title:"spanish",body:"Como-estas-Amigo",author:"Rudeus"}
];

app.get("/",(req,res) => {
    res.render('index.ejs',{blogs : blogs});
});

app.get("/blog/view/:id",(req,res) => {
  let id = parseInt(req.params.id);
  const blog = blogs[id];
  res.render("view.ejs",{blog})
})

app.get("/blog/Edit/:id",(req,res) => {
  let id = parseInt(req.params.id);
  const blog = blogs[id];
  res.render("edit.ejs",{blog});
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})