import express from 'express';
import bodyParser from 'body-parser';
const app = express();


// app.use((req,res,next) => {
//     console.log('hi')
//     next();
// })

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.send("getting root");
})

app.get('/profile', (req,res) => {
    res.send("getting profile");
})

app.post('/profile', (req,res) => {
    console.log(req.body)    
    res.send('Success')
})


app.listen(3000);