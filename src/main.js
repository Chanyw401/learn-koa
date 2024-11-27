const Koa = new require('koa')

const app = new Koa()

app.use( async (ctx)=>{
    ctx.body = 'hello world'
} )

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})