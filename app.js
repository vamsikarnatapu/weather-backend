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
  var token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  if(request.body.token == token1){
    response.send(resp)
  }
  else{
    console.log("Token Not Matching")
  }
}

function get_hello(request, response){
  var token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  if(request.body.token == token2){
    response.send("Hi! I am Vamsi")
  }
  else{
    console.log("Token Not Matching")
  }
  
}

function post_data(request, response){
  
  let usernames = ["Vamsi", "Vinoothna", "Arjun"]
  let passwords = ["123", "456", "789"]
  var username = request.body.username
  var pwd = request.body.password
  console.log(request.body)
  if (username != "" && usernames.includes(username)){
    if(pwd != "" && passwords.includes(pwd)){
      
      var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      
      var res_json = {
        "access-token" : token,
        "expires" : new Date().toISOString()
      }
      console.log("validated")
      response.json(res_json)
      
    }
  
  
  
}

}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
