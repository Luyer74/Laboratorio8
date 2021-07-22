const { table } = require('console');
var express = require('express');
var path = require('path');

var app = express();
var PORT = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Luis Arambula",
        phone_number: "134567",
        email: "luisyerik@yahoo.com",
        id: 1
    },
    {
        name: "Bea Martinez",
        phone_number: "45231",
        email: "beamzuniga@gmail.com",
        id: 2
    }
]

var waitList = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", function(req, res){
    return res.json(tables);
})

app.get("/api/waitlist", function(req, res){
    return res.json(waitList);
})


app.post("/api/tables", function(req, res){
    var newTable = req.body;
    console.log(newTable);
    if (tables.length < 5){
        tables.push(newTable);
        res.send("Reserved succesfully!")
    }
    else{
        waitList.push(newTable);
        res.send("No more tables! We added you to the waitlist.")
    }
    console.log("pushed!");
})

app.listen(PORT, () => {
    console.log("App listening on port:" + PORT);
})