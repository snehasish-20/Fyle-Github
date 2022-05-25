const axios=require("axios")
const express=require("express")
const app=express()
var cors = require('cors')

app.use(cors()) 

const port=process.env.PORT || 5000

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


//To fetch the repositories of a particular user
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
        TotalRepo: response.data.length, //Adding total no of repositories of a particular user to the response
        RepoList: repoList //adding details of all the repositories of user to the response
}
        res.send(JSON.stringify(data));
    })
    .catch(function (error) {
        console.log(error);
    });
    
})

//to fetch the details about a particular user
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
