const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
// const model = require('./model');

const app = new Koa();
const router = new Router();

const main = async (ctx) => {
    const ret = 'hello koa';
    ctx.body = ret;
}
router.get('/', main);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(4000);