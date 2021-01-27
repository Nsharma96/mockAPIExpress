const express  = require('express');
const fs = require('fs');

const app = express();
const rawDataAllProjects  = fs.readFileSync('./mock/projects.json')
const projects = JSON.parse(rawDataAllProjects);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/projects",(req,res) => {
    res.send(projects);
});

app.listen(3001);