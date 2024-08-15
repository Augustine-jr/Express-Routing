const express =require('express')

const app = express()

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", (req, res)=>{
  res.render("gmc")
})

app.listen(4003, () =>{
  console.log('Server is running on port http://localhost:4003')
})