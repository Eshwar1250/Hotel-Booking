// Importing frameworks
const express = require('express') ,
      request = require('request')
const app = express()
// Setting up the router
const router = express.Router();

router.get('/' , (httprequest , httpresponse , next)=>{

    if(httprequest.app.locals.tokenid == undefined){
        console.log("There is no token id please use /auth")
        httpresponse.status(400).json({

            "Message":"No token id"
        })
    }
    else{
        console.log("TOken id is :" , httprequest.app.locals.tokenid)
    const url ='http://127.0.0.1:3001/destcitylist'
// http://api.tektravels.com/SharedServices/SharedData.svc/rest/CountryList
    const data =
    {
        "TokenId": ""+httprequest.app.locals.tokenid,
        "ClientId": "nishant",
        "EndUserIp": httprequest.ip,
        "CountryCode": "IN"
    }
    request.post( url , {form:data} , (req ,res ,body)=>{
    //Here we make a request to TEK SOL api auth to get tokenid (request)
    const responseData = JSON.parse(body)
    if(responseData.Status == '1'){
        httpresponse.status(200).json({
            "status" : "1",
            "Destination City List" : ""+responseData.destcitylist
        })
    }
    else
    {
    const error = JSON.parse(400)
        httpresponse.status(error.ErrorCode).json({
            "ErrorMessage" : ""+error.ErrorMessage , 
            "ErrorCode" : ""+error.ErrorCode
        })
    }
    })

 }
})

module.exports = router