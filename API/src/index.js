const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
// 데이터베이스 모델링
// const model = require('./model'); 

const app = new Koa();
const router = new Router();

const main = async (ctx) => {
    const ret = 'hello koa';
    ctx.body = ret;
}
router.get('/', main);

const ledOn = async (ctx) => {
    const signal = ctx.request.body;
    const ret = await module.ledOn({signal});

    ctx.body = ret;
}
router.post('/ledOn', bodyParser(), ledOn);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(4000);