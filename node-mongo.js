exp=require("express")
app=exp()
mj=require("mongojs")
con=mj("mongodb://localhost:27017/bat430")
console.log(con)
con.tbl_user.find({city:"sec"},(err,result)=>{
console.log(result)
})
	app.listen(1000)
