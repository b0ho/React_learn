const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디 없음';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
