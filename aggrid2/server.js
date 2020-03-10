exp=require("express")
app=exp()
app.listen(1000)
cr=require("cors")
app.use(cr())
mj=require("mongojs")
co=mj("mongodb://localhost:27017/bat430")

app.get("/getdata",(req,res)=>{
co.tbl_user.find((err,result)=>{
res.send(result)
})
})