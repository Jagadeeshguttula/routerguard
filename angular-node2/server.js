exp=require("express")
app=exp()
cors=require("cors")
app.use(cors())
bp=require("body-parser")
app.use(bp.json())
app.listen(1000)

app.post('/service1',(req,res)=>{
console.log(req.body)
res.send({city:"hyd"})
})