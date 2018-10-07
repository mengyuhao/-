const Koa = require("koa");
const route = require("koa-route");
const koaBody = require("koa-body");
const koastatic = require("koa-static");
const cors= require("koa2-cors");
const path= require("path");
const app = new Koa();
//确定访问的静态文件的地址
const main=koastatic(path.join(__dirname));
//运行上一句
app.use(main);
app.use(cors({
	origin: "*",
	exposeHeaders: ["WWW-Authenticate", "Server-Authorization", "Date"],
	maxAge: 100,
	credentials: true,
	allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Custom-Header",
	"anonymous"],
}));
//设置商品查询和分类功能的路由
app.use(koaBody());

app.use(route.get('/goodslist',require("./route/goodslist.js")));

app.listen(3000);