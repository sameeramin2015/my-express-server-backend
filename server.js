const express = require("express"); // incorporate express in to the file



const app = express();

app.get("/", function(req, res){
    //console.log(request);
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    //console.log(request);
    res.send("<p>Contact Me at sameeramin2015@gmail.com</p>");
});

app.get("/about", function(req, res){
    //console.log(request);
    res.send("<p>I'm Enthusiastic Front-End web developer specialized in Front-End development. Designing and development of modern and responsive websites and web applications. Well versed in numerous programming languages and Technologies including Styled Components, Bootstrap, JavaScript, Reactjs, Nextjs, Vuejs, Firebase, MongoDB, Nodejs, Ant Design, Sass .</p>");
});

app.get("/hobbies", function(req, res){
    res.send("<h2>Hello my hobby is writting code!</h2>")
})
app.listen(3000, function(){
    console.log("server started on port 3000");
});

