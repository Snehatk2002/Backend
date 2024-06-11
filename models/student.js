const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "name" : {type:String,required:true},
        "admissionno":{type:String,required:true},
        "rollno" :{type:String,required:true},
        "parentname" :{type:String,required:true}
    }
)
let studentmodel=mongoose.model("students",schema)
module.exports={studentmodel}