const Router = require('koa-router')

let router = new Router()

router.get('/', (ctx) => {
    ctx.body = 'Hello, World!'
})

module.exports = router