const axios=require("axios")
const express=require("express")
const app=express()
var cors = require('cors')

app.use(cors()) 

const port=process.env.PORT || 5000

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }

app.get("/userrepositories",(req,res)=>{
    const page=req.query.page
    const userName=req.query.username
    const limit=10
    const startIndex=(page-1)*limit
    const endIndex=page*limit
    let url = `https://api.github.com/users/${userName}/repos`;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
    var repoList=response.data.slice(startIndex,endIndex)
    var data = {
        TotalRepo: response.data.length,
        RepoList: repoList
}
        res.send(JSON.stringify(data));
    })
    .catch(function (error) {
        console.log(error);
    });
    
})

app.get("/userdetails",(req,res)=>{
    const userName=req.query.username
    let url = `https://api.github.com/users/${userName}`;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    
})


app.listen(port, () => console.log("server running on port: ", port));
