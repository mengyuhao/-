const mongoose=require('../mong/mongo');
Schema=mongoose.Schema;
var GoodSchema=new Schema({
    goodname:{type:String},
    goodtype:{type:String},
    goodprice:{type:Number},
    goodofften:{type:Number}
})
module.exports=mongoose.model('Good',GoodSchema)