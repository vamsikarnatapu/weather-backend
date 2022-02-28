const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var apiMocker = require('connect-api-mocker');
const resp = require("./response.json")
app.get('/data/2.5/weather', (req, res) => {
  console.log("hi")
  res.send(resp);    
})
app.get('/v1/weather', get_weather_v1)
app.get('/v1/hello', get_hello)
app.post('/v1/auth', post_data)
function get_weather_v1(request, response){
  response.send(resp)
}
function get_hello(request, response){
  response.send("Hi! This is vamsi")
}
function post_data(request, response){
    let usernames = ["vamsi", "vinoothna", "arjun"]
  let passwords = ["123", "456", "789"]
  var username = request.body.username
  var pwd = request.body.password
  console.log(req.body)
  if (username != NULL && usernames.includes(username)){
    if(pwd != NULL && passwords.includes(pwd)){
      var token = "Abc_1234"
      console.log("validated")
      return token 
    }
  }
 }
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
