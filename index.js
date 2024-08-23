import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hi',(req,res)=>{
    res.json({msg:'hi deepak'});
})
app.get('/data',(req,res)=>{
    res.json({data : 'data is here'})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))