const express = require("express");
let app = express();
//console.log(app);

// function for listen to request
let port = 8080;
app.listen( port , ()=>{
    console.log(`app is listning on port  ${port} `);
})

// app.use((req , res)=>{
//   //  console.log(req);
//     console.log("request recieved");
//     res.send(fruits ={
//         name : "appple",
//         color : "red"
//     })
// })
app.get("/" , (req , res)=>{
    res.send("you contacted root path")
 
})
// app.get("/apple" , (req , res)=>{
//     res.send("you contacted apple path")
// })
// app.get("/orange" , (req , res)=>{
//     res.send("you contacted orange path")
    
// })
// app.get("*" , (req , res)=>{
//     res.send("path does not exist")
    
// })

// app.get("/:username/:id" ,(req ,res)=>{
//     let {username ,id} = req.params;
//     res.send(`welcome to ${username}`);
// });


app.get("/search" ,(req,res)=>{
    console.log(req.query);
    res.send("no result0");

})   