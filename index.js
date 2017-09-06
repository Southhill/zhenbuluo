const koa = require('koa')
const serve = require('koa-static')

const router = require('./routes/index.js')

let app = new koa()

app.use(router.routes())
    .use(router.allowedMethods())
    
app.use(serve('.'))    

app.listen(3000)

app.on('error', (err, ctx) => {
    this.throw(503, 'server error')
    console.log('server error', err, ctx)
})
module.exports = app