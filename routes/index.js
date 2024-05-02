var express = require('express');
var router = express.Router();
const userModel=require("./users");
/* GET home page. */
// router.get("/",function(req,res){
//   res.send("Hey I am From Index.js File")
// })
router.get("/",(req,res)=>{
  res.render('index');
})

              // Create,Update And Delete
           
              // to create
router.get("/create",async function(req,res){
 const createduser= await userModel.create({
    username:"Abhishek@Maurya",
    age:21,
    name:"Abhishek Maurya"
  });
  res.send(createduser);
});


                // To find User   (all users)
       router.get("/alluser", async function(req,res){
        let alluser=await userModel.find()
        res.send(alluser)
       })         


               //TO find one (use findOne()  Method)

               router.get("/findone", async function(req,res){
                let findone=await userModel.findOne({username:"Abhishek@Maurya"})
                res.send(findone)
               })         
        



                   // To delete One
        
              router.get("/delete",async function(req,res){
           let deleteOne= await userModel.findOneAndDelete({username:"Abhishek@Maurya"})
             res.send(deleteOne)
          })  
          
          router.get("/checkdelete",async function(req,res){
            let checkdelete=await userModel.find()
            res.send(checkdelete)
          })


module.exports = router;
