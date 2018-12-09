var express = require("express")
var request = require("request");
var body = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(body.urlencoded({extended : true}));

app.get("/", function(req,res){
    res.render("home");
})

app.post("/api", function(req,res){
    var querySearch = req.body.query;
    var apiKey ="&apikey=thewdb";
    console.log(req.body.query);
    
    request("http://www.omdbapi.com/?s="+querySearch+apiKey,function(error, response, body){
    if(!error && response.statusCode === 200){
        console.log(JSON.parse(body));
        var data = JSON.parse(body).Search;
        console.log(data);
        res.render("searched", {data: data});
        
        
    }})})
    
    


app.listen(process.env.PORT, process.env.IP);