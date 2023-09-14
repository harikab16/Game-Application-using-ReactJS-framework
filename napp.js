var express=require('express');

var app=express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"node"
});

  // res.send("Hello world..!");
  var sql=`SELECT * from users `;
  
  con.query(sql,(err,result,fields)=>
  {
      console.log(result)
  })

app.get('/users',(req,res)=>
{
    // res.send("Hello world..!");
    var sql=`SELECT * from users `;
  
    con.query(sql,(err,result,fields)=>
    {
        res.send(result)
    })
});

// app.use(cors())

app.listen(3003,()=>
{
    console.log("Listening at port 3003")
})


// console.log(data)


