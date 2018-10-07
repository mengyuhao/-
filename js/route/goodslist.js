const Good=require('../model/good')
//商品分类查询功能
const goodlist=async function(ctx){
    let result={
        errCode:0
    };
    let goods1=await Good.find({"goodtype":1});
    let goods2=await Good.find({"goodtype":2});
    let goods3=await Good.find({"goodtype":3});
    if(goods1.length==0&&goods2.length==0&&goods3.length==0){
        result.errCode=1;
        result.msg="没有找到查询结果";
        ctx.body=result;
        return
    }else{
        result.errCode=0;
        result.msg="查询到结果";
        result.list={type1:goods1,type2:goods2,type3:goods3}
        ctx.body=result
        return
    }
}
module.exports=goodlist