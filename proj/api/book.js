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
    const url ='http://127.0.0.1:3001/book'
// http://api.tektravels.com/SharedServices/SharedData.svc/rest/CountryList
const data =
    {
        "ResultIndex": "2",
"HotelCode": "ACR1|AMS",
"HotelName": "Tulip Inn Amsterdam Riverside",
"GuestNationality": "IN",
"NoOfRooms": "1",
"ClientReferenceNo": "0",
"IsVoucherBooking": "false",
"HotelRoomsDetails": [
{
"RoomIndex": "1",
"RoomTypeCode": "SB|0|0|1",
"RoomTypeName": "Standard Single",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98679|1",
"BedTypeCode": null,
"SmokingPreference": 0,
"Supplements": null,
"Price": {
"CurrencyCode": "INR",
"RoomPrice": "4620.0",
"Tax": "0.0",
"ExtraGuestCharge": "0.0",
"ChildCharge": "0.0",
"OtherCharges": "0.0",
"Discount": "0.0",
"PublishedPrice": "4620.0",
"PublishedPriceRoundedOff": "4620",
"OfferedPrice": "4620.0",
"OfferedPriceRoundedOff": "4620",
"AgentCommission": "0.0",
"AgentMarkUp": "0.0",
"ServiceTax": "92.4",
"TDS": "0.0"
},
"HotelPassenger": [
{
"Title": "mr",
"FirstName": "GTA",
"Middlename": null,
"LastName": "Service",
"Phoneno": null,
"Email": null,
"PaxType": 1,
"LeadPassenger": true,
"Age": 0,
"PassportNo": null,
// "PassportIssueDate": “0001-01-01T00:00:00”,
// "PassportExpDate" : “0001-01-01T00:00:00”
}
]
}
],
"EndUserIp": httprequest.ip , 
"TokenId": ""+httprequest.app.locals.tokenid,
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d"

    }

    request.post( url , {form:data} , (req ,res ,body)=>{
    //Here we make a request to TEK SOL api auth to get tokenid (request)
    const responseData = JSON.parse(body)
    if(responseData.Status == '1'){
        httpresponse.status(200).json({
            "status" : "1",
            "Book" : ""+responseData.book
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