const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let options = {
    dotfiles: "ignore",
    etag: true,
    extensions: ["htm", "html"],
    index: false,
    maxAge: "7d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    }
  };
  
app.use(express.static("./", options));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('pricing.ejs');
});

app.listen(port, console.log('listening on port '+port));
