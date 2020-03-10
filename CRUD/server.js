exp=require("express")
app=exp()
app.listen(1000)
mj=require("mongojs")
x=require("mongojs").ObjectId
con=mj("mongodb://localhost:27017/bat430")
bp=require("body-parser")
app.use(bp.json())
cr=require("cors")
app.use(cr())

////API to get data
app.get("/getdata",(req,res)=>{
con.tbl_user.find(function(err,result){
if(err)
res.send(err)
else
res.send(result)
})
})

///API to update
app.post("/updatedata",(req,res)=>{
    rowid=req.body[0]._id
    console.log(rowid)
con.tbl_user.update({_id:x(rowid)},{$set:req.body[1]})
res.send({response:"Updated"})
})
///API to remove
app.post("/rmvdata",(req,res)=>{
con.tbl_user.remove({_id:x(req.body._id)})
res.send({resp:"Deleted"})
})
///API to insert
app.post("/insdata",(req,res)=>{
con.tbl_user.save(req.body)
res.send({result:'Inserted'})
})
