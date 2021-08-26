const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const controller = require('./controller');

const bodyParser = () => {
    return koaBody({ multipart: true });
}

const app = new Koa();
const router = new Router();

const routerOne = async (ctx) => {
    const ret = 'sweet home';
    ctx.body = ret;
}
router.get('/', routerOne);

const routerTwo = async (ctx) => {
    const {parameterOne} = ctx.request.body;
    const ret = await controller.moduleTwo({parameterOne});

    ctx.body = ret;
}
router.post('/routerTwo', bodyParser(), routerTwo);


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);