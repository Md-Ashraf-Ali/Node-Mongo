const express = require('express');




const app = express();
app.get('/', function (req, res) {
    res.send('i love node');
  })
  
  app.listen(3000, ()=>console.log('listening to port 3000'));