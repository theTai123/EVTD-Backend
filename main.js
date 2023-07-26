const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const translate = require('translatte');
const app = express();
const port = 8080

app.use(cors());
app.use(bodyparser.json());

app.post('/',(req,res)=>{
    console.log(req.body);
    translate(req.body.text, {to: req.body.lang}).then(data => {
        res.send({result: data.text});
    }).catch(err => {
        console.error(err);
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})