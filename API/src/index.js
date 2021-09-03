const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const controller = require('./controller');

const app = new Koa();
const router = new Router();

const bodyParser = () => {
    return koaBody({ multipart: true });
}

const main = async (ctx) => {
    ctx.body = "WorkSpace";
}
router.get('/', main);

const led = async (ctx) => {
    const ledSwitch = ctx.request.body;
    const ret = await controller.led(ledSwitch);

    ctx.body = ret;
}
router.post('/led', bodyParser(), led);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);