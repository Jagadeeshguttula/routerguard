exp=require("express")
app=exp()
app.listen(1000)
app.get("/met1",(req,res)=>{
    res.send({result:1})
})