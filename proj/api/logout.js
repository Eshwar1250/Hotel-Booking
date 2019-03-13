// Importing frameworks
const express = require('express') , 
      request = require('request')

const app = express()  
// Setting up the router
const router =express.Router()
   
// Handling the request from app.js
router.get('/' , (httprequest , httpresponse ,next)=>{
  if(httprequest.app.locals.tokenid == undefined){
    console.log("There is no token id please use /auth")
    httpresponse.status(400).json({

        "Message":"No token id"
    })
  }
  else{
  // console.log("This is form logout.js tokenid is :" ,req.app.locals.tokenid)
  //Here we receive the req from app.js (express)
  const url = 'http://127.0.0.1:3001/logout'
  // 'http://api.tektravels.com/SharedServices/SharedData.svc/rest/Logout'
  const data={
    "ClientId": "ApiIntegration",
    "EndUserIp": httprequest.ip,
    "TokenAgencyId": 8428,
    "TokenMemberId": 9611,
    "TokenId": httprequest.app.locals.tokenid
    }
  request.post(  url ,{form:data} ,(err , response , body)=>{
  //Here we make a request to TEK SOL api auth to get tokenid (request)
  const responseData = JSON.parse(body)
  if(responseData.Status =='1'){
    console.log("User logged out sucessfully!")
      httprequest.app.locals.tokenid = undefined
      httpresponse.status(200).json({
        "status":"1" ,
      })
    }
    else{
      // const error = responseData.Error
          httpresponse.status(400).json({
              "ErrorMessage" : ""+responseData.Error.ErrorMessage , 
              "ErrorCode" : ""+responseData.Error.ErrorCode
          })
      }
  
  })
}
})
module.exports = router