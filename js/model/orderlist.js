let mongoose=require('../mong/mongo')
Schema=mongoose.Schema;
let OrderlistSchema=new Schema({
    username:{type:String},
    goodslist:{type:Object},
    creattime:{type:Date},
    orderatate:{type:String},
    ordertotal:{type:Number}
});
module.exports=mongoose.model('Orderlist',OrderlistSchema)