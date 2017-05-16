var express = require('express')
var cookieParser = require('cookie-parser')
var port = process.env.PORT | 3000

var app = express()
app.use(cookieParser())

app.get('/login', function (req, res) {
    res.send('Hello cookie!!! [' + req.cookies.testcookie +']');
})
app.post('/200', function (req, res) {
    res.cookie("testcookie","hi - 200!", {"httpOnly":true})
    res.send('<html><<head><script>window.location="/redirect"</script></head>/html>');
})  
app.post('/302', function (req, res) {
    res.cookie("testcookie","hi - 302!", {"httpOnly":true});
    res.redirect(302, "/redirect");
})
app.get("/redirect", function(req, res) {
    res.redirect("/login");
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
})
