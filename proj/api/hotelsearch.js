// Importing frameworks
const express = require('express') ,
      request = require('request')
const app = express()
// Setting up the router
const router = express.Router();


router.use('/' , (httprequest , httpresponse , next)=>{



    if(httprequest.app.locals.tokenid == undefined)
        {
        console.log("There is no token id please use /auth")
        httpresponse.status(400).json({

            "Message":"No token id"
        })
        }
    else
        {
            console.log("TOken id is :" , httprequest.app.locals.tokenid)
            // const url ='http://api.tektravels.com/BookingEngineService_Hotel/hotelservice.svc/rest/GetHotelResult/'
            const data =
            {
            "CheckInDate": httprequest.app.locals.check_in_out_dates ,
            "NoOfNights": "1",
            "CountryCode": "NL",
            "CityId": "14621",
            "ResultCount": null,
            "PreferredCurrency": "INR",
            "GuestNationality": "IN",
            "NoOfRooms": "1",
            "RoomGuests": [
            {
            "NoOfAdults": 1,
            "NoOfChild": 0,
            "ChildAge": null
            }],
            "PreferredHotel": "",
            "MaxRating": 5,
            "MinRating": 0,
            "ReviewScore": null,
            "IsNearBySearchAllowed": false,
            "EndUserIp": httprequest.ip,
            "TokenId": httprequest.app.locals.tokenid
            }   
    
            request.post(
                {
                    url :'http://api.tektravels.com/BookingEngineService_Hotel/hotelservice.svc/rest/GetHotelResult/' ,
                    body: data ,
                    json: true , 
                    headers: {'contentType': 'application/json'}
                } ,
                (err , httpResponse , body)=>{
                    if(err)
                        console.log({"message":err})
                    else{
                        console.log({"message":JSON.stringify(body)})
                        httpresponse.write(body)
                        httpresponse.status(200).json(body)
                    }
                })
        }
});
module.exports = router