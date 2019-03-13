const express = require('express') ,
      request = require('request')

const app = express()
const router = express.Router()
// Declaring the vars
var agencyCashBalance = ''
var agencyCreditBalance = ''

router.get('/' , (httprequest , httpresponse , next) =>{

    if(httprequest.app.locals.tokenid == undefined){
        console.log("There is no token id please use /auth")
        httpresponse.status(400).json({

            "Message":"No token id"
        })
    }
    else {
// Receiving the req from app.js
const url = 'http://127.0.0.1:3001/balance'
// 'http://api.tektravels.com/SharedServices/SharedData.svc/rest/GetAgencyBalance'

const data = {
    "ClientId": "ApiIntegration",
    "EndUserIp": httprequest.ip ,
    "TokenAgencyId": 8428,
    "TokenMemberId": 9611,
    "TokenId": ""+httprequest.app.locals.tokenid
}

// TODO : Need to make this request.post await
request.post( url , {form:data} , (req ,res,body)=>{
    // Here we receive the response body from TEK SOL
    const responseData = JSON.parse(body)
    if(responseData.Status == '1'){
        agencyCashBalance = responseData.CashBalance
        agencyCreditBalance = responseData.CreditBalance

        httpresponse.status(200).json({
            "agencyCashBalance" : ""+agencyCashBalance , 
            "agencyCreditBalance" : ""+agencyCreditBalance
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