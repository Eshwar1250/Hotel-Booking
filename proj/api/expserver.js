const express = require('express')

const app = express()

var chunk = ''

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

app.use(myLogger)
app.use('/auth' , (req , res)=>{  
    
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
              
        res.send({
            "Status": 1,
            "TokenId": "705d0324-56eb-48a0-9e8e-bd6ed9f853d5",
            "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
            },
            "Member": 
            {
            "FirstName": "Xxxxx",
            "LastName": "Yyyyyy",
            "Email": "zaassssss@gmail.com",
            "MemberId": 111,
            "AgencyId": 222,
            "LoginName": "username",
            "LoginDetails": "Login Success at#@ 8/14/2013 6:17:22 PM #@ IPAddress: 122.172.106.185",
            "isPrimaryAgent": false
            }
        })
        
        res.end()
        chunk=''

    })
})

app.use('/logout' , (req , res, next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })
    req.on('end' , ()=>{

        res.send({
            "Status": 1 ,
            "Error": {
                "ErrorCode": 0,
                "ErrorMessage": ""
                }               
        })
        res.end()
        chunk=''
    })

})

app.use('/balance' , (req , res , next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{

        res.send({
            "AgencyType": 1,
            "CashBalance": 9973376207,
            "CreditBalance": 0,
            "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
            },
            "Status": 1
        })
        res.end()
        chunk=''
    })

})
app.use("/countrylist" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({

            "CountryList":
"<Countries><Country><Code>AF</Code><Name>Afghanistan</Name></Country><Country><Code>AL</Code><Name>Albania</Name></Country><Country><Code>DZ</Code><Name>Algeria</Name></Country><Country><Code>AS</Code><Name>AmericanSamoa</Name></Country><Country><Code>AD</Code><Name>Andorra</Name></Country><Country><Code>AO</Code><Name>Angola</Name></Country></Countries>",
            "Error": {
                "ErrorCode": 0,
                "ErrorMessage": ""
                },
                "Status": 1

        })
        res.end()
        chunk=''
       
    })

})
app.use("/destcitylist" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "DestinationCityList":
            "<Cities><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>IXA</cityCode><cityName>Agartala</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>AGX</cityCode><cityName>AgattiIsland</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>AGR</cityCode><cityName>Agra</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>AMD</cityCode><cityName>Ahmedabad</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>AJL</cityCode><cityName>Aizawl</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>AKD</cityCode><cityName>Akola</cityName></City><City><countryCode>IN</countryCode><countryName>India</countryName><cityCode>IXD</cityCode><cityName>Allahabad</cityName></City></Cities>",
            "Error": {
                "ErrorCode": 0,
                "ErrorMessage": ""
            },
        "Status": 1,
        })
        res.end()
        chunk=''
       
    })

})
app.use("/topdest" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
            },
            "Status": 1,
            "TopDestination":
            "<Cities><City><cityId>14621</cityId><cityName>Amsterdam</cityName><countryCode>NL</countryCode></City><City><cityId>17249</cityId><cityName>Antalya</cityName><countryCode>TR</countryCode></City><City><cityId>9434</cityId><cityName>Athens</cityName><countryCode>GR</countryCode></City><City><cityId>10142</cityId><cityName>Bali</cityName><countryCode>ID</countryCode></City><City><cityId>16974</cityId><cityName>Bangkok</cityName><countryCode>TH</countryCode></City><City><cityId>3518</cityId><cityName>Barcelona</cityName><countryCode>ES</countryCode></City><City><cityId>23131</cityId><cityName>Basel</cityName><countryCode>CH</countryCode></City><City><cityId>23884</cityId><cityName>Beijing</cityName><countryCode>CN</countryCode></City><City><cityId>13551</cityId><cityName>Beirut</cityName><countryCode>LB</countryCode></City></Cities>"
        })
        res.end()
        chunk=''
       
    })

})
app.use("/hotelsearch" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "HotelSearchResult": {
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d",
"CityId": "14621",
"CheckInDate": "2016-02-23",
"CheckOutDate": "2016-02-24",
"PreferredCurrency": "INR",
"NoOfRooms": 1,
"RoomGuests": [{
"NoOfAdults": 1,
"NoOfChild": 0,
"ChildAge": null
}
],
"HotelResults": [
{
"ResultIndex": 2,
"HotelCode": "ACR1|AMS",
"HotelName": "Tulip Inn Amsterdam Riverside",
"HotelCategory": "",
"StarRating": 3,
"HotelDescription": "Located in the outskirts of Amsterdam in a residential area, this hotel is actually on the main ring road of Amsterdam with easy access to the airport and city centre. The metro is 10 mins walk away. The medium-sized bedrooms are in very good condition. There is a very tasteful, regal theme throughout, with all rooms containing a print of a royal crest and all furniture bearing a crown motif. The colour scheme is predominantly royal blue and all rooms have a small seating area and desk. Those bedrooms with French patio doors have been altered so that the doors only open a couple of inches. Whilst the front half of the restaurant maintains a light, airy and casual feel, the back half is more formal. Between the front and back of the restaurant is a brasserie-type room with wooden floors. The bar is also here. The whole atmosphere is that of a ship and is very easy on the eye. This hotel was opened in 1992 and is a low rise modern building. The lobby is small and furnished in simple, modern style. This hotel is suitable for all markets, especially those on a budget looking for a hotel that does not resemble a budget hotel. 030807JG ",
"HotelPromotion": "",
"HotelPolicy": "",
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 4620,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 4620,
"PublishedPriceRoundedOff": 4620,
"OfferedPrice": 4620,
"OfferedPriceRoundedOff": 4620,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 0,
"TDS": 0
},
"HotelPicture":
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQho2ca1RGY2hWEfquloiGzaCA==",
"HotelAddress": "PROVINCIALEWEG 38 1108 AB AMSTERDAM (SOUTH EAST) THE NETHERLANDS, , Netherlands, ",
"HotelContactNo": "",
"HotelMap": null,
"Latitude": "",
"Longitude": "",
"HotelLocation": null,
"TripAdvisor": {
"Rating": 3.5,
"ReviewURL": "http://www.tripadvisor.com/Hotel_Review-g188590-d230104-Reviews-m19454-Tulip_Inn_Amsterdam_Riverside-Amsterdam_North_Holland_Province.html"
},
"RoomDetails": []
},
{
"ResultIndex": 32,
"HotelCode": "TRI|AMS",
"HotelName": "TRIANON",
"HotelCategory": "",
"StarRating": 2,
"HotelDescription": "The hotel is located in a quiet side street just off the Van Baerlestraat,in the best shopping area of Amsterdam. The concert hall is just next door, and the Rijks Museum,the Van Gogh Museum and the Stedelijk Museum are also very close by. Even the historical city centre and Leidseplein are within walking distance. The small bedrooms are furnished in simple,basic style, but some redecoration is needed. Both rooms and bathrooms are in fair condition. The hotel has a breakfast room only which is situated on the ground floor. The building itself dates from the 1920's and the exterior reflects the architectural style of that era. The lobby is medium sized and pleasantly decorated with distinct blue carpet. The lobby area leads to a cosy bar and lounge area with leather seating where smoking is permitted as it is not permitted in any of the other public areas.This hotel is ideal for individuals or small groups due to its ideal location. jg/03/2008 ",
"HotelPromotion": "",
"HotelPolicy": "",
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 5637.5,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 5637.5,
"PublishedPriceRoundedOff": 5638,
"OfferedPrice": 5637.5,
"OfferedPriceRoundedOff": 5638,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 0,
"TDS": 0
},
"HotelPicture":
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQhoCtnztIcLRaMmvQSGkMBiJw==",
"HotelAddress": "3 J W BROUWERSSTRAAT 1071 LH AMSTERDAM NETHERLANDS, ,Netherlands, ",
"HotelContactNo": "",
"HotelMap": null,
"Latitude": "",
"Longitude": "",
"HotelLocation": null,
"TripAdvisor": {
"Rating": 2,
"ReviewURL": "http://www.tripadvisor.com/Hotel_Review-g188590-d239017-Reviews-m19454-Trianon_Hotel-Amsterdam_North_Holland_Province.html"
},
"RoomDetails": []
},
{
"ResultIndex": 11,
"HotelCode": "BLU|AMS",
"HotelName": "Blue Tower",
"HotelCategory": "",
"StarRating": 4,
"HotelDescription": "This hotel is located close to Amsterdams ring road, so it is within easy reach for those with their own transport. However, it is also very easily accessible on public transport from the airport and city centre. The hotel itself is surrounded by fast food restaurants and a large shopping centre. As this property only opened in June 2007, the bedrooms are in very good condition. They are all medium- to large-sized with cherry wood furniture, flat screen televisions and artwork on the walls. The bathrooms are modern and also in very good condition with black marble sinks, beige tiles and glass shower screens. All have both power showers and hand held showers and all have a bath, except the double rooms, which have very large power showers. There are safety deposit boxes large enough for laptops as well as air conditioning in all rooms, but there are no mini bars. Most twin rooms consist of two beds pushed together. All rooms are non smoking. The restaurant is located on the first floor and serves breakfast only. Group meals are available upon request. It is a very large and spacious area with cherry wood furniture, large windows and a large,modern, buffet area. This is a modern, purpose-built block, with a very blue exterior, giving the hotel its name. The lobby is very large and impressive with white faux leather seating, various other forms of seating, a black and white tiled floor and very attractive ceiling lighting that constantly changes colour. In the near future, a bar will be incorporated into this area but at the time of writing, this was not yet completed. This is a brand new hotel in Amsterdam and offers great value for money. It comes highly recommended. \n100708jg ",
"HotelPromotion": "",
"HotelPolicy": "",
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 5995,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 5995,
"PublishedPriceRoundedOff": 5995,
"OfferedPrice": 5995,
"OfferedPriceRoundedOff": 5995,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 0,
"TDS": 0
},
"HotelPicture":
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQhoWciL7OOka4fpQPaWw27nKg==",
"HotelAddress": "LEEUWENDALERSWEG 21 1055 JE AMSTERDAM Amsterdam NETHERLANDS Netherlands, , Netherlands, ",
"HotelContactNo": "",
"HotelMap": null,
"Latitude": "",
"Longitude": "",
"HotelLocation": null,
"TripAdvisor": {
"Rating": 3.5,
"ReviewURL": "http://www.tripadvisor.com/Hotel_Review-g188590-d652518-Reviews-m19454-BEST_WESTERN_Blue_Tower_Hotel-Amsterdam_North_Holland_Province.html"
},
"RoomDetails": []
}
]
}
        })
        res.end()
        chunk=''
       
    })

})
app.use("/hotelinfo" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            
            "HotelInfoResult": {
                "ResponseStatus": 1,
                "Error": {
                "ErrorCode": 0,
                "ErrorMessage": ""
                },
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d",
"HotelDetails": {
"HotelCode": "ACR1|AMS",
"HotelName": "Tulip Inn Amsterdam Riverside",
"StarRating": 3,
"HotelURL": null,
"Description": "<br /><b>location:</b> <br />&nbsp;Located in the outskirts of Amsterdam in a residential area, this hotel is actually on the main ring road of Amsterdam with easy access to the airport and city centre. The metro is 10 mins walk away.&nbsp; <br /><br /><b>rooms:</b> <br/>&nbsp;The medium-sized bedrooms are in very good condition. There is a very tasteful, regal theme throughout, with all rooms containing a print of a royal crest and all furniture bearing a crown motif. The colour scheme is predominantly royal blue and all rooms have a small seating area and desk. Those bedrooms with French patio doors have been altered so that the doors only open a couple of inches.&nbsp; <br /><br /><b>restaurant:</b> <br />&nbsp;Whilst the front half of the restaurant maintains a light, airy and casual feel, the back half is more formal. Between the front and back of the restaurant is a brasserie-type room with wooden floors. The bar is also here. The whole atmosphere is that of a ship and is very easy on the eye.&nbsp; <br /><br /><b>exterior:</b> <br/>&nbsp;This hotel was opened in 1992 and is a low rise modern building.&nbsp; <br /><br/><b>lobby:</b> <br />&nbsp;The lobby is small and furnished in simple, modern style.&nbsp; <br/><br /><b>general:</b> <br />&nbsp;This hotel is suitable for all markets, especially those on a budget looking for a hotel that does not resemble a budget hotel. 030807JG&nbsp; <br />",
"Attractions": [
{
"Key": "1) ",
"Value": "10 kms to city centre"
},
{
"Key": "2) ",
"Value": "15 kms to the nearest airport (schiphol airport)"
},
{
"Key": "3) ",
"Value": "15 minute walk to the nearest metro station (gaasperplas)"
},
{
"Key": "4) ",
"Value": "10 km to the nearest station (central station)"
},
{
"Key": "5) ",
"Value": "5 minute walk to the nearest bus stop"
},
{
"Key": "6) ",
"Value": "10 km to the nearest fair site (rai)"
}
],
"HotelFacilities": [
"Small sized lobby",
"Earliest check-in at 14:00",
"2 lifts",
"3 floors",
"Coach parking",
"Car parking (Payable to hotel, if applicable)",
"Tennis",
"Baby sitting",
"Disabled facilities"
],
"HotelPolicy": null,
"SpecialInstructions": null,
"HotelPicture": null,
"Images": [
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQho2ca1RGY2hWEfquloiGzaCA==",
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQhoDizplENpfVb822OetiqfIg==",
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQho4qr9ZiEedRCyAtDGrZD/Og==",
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQhoCHy8YYNr91c8R5UcAzWheg==",
"http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQho2cIT7qTX5R24fA8OVhM0SQ==","http://b2b.tektravels.com/imageresource.aspx?img=hpRBSdtPJNrQuwRo5I/exPbdtjJGoRI2R1Qo2/mGLJmyqx45ZoqbxPjvgo2rvQhoHthWAZEK/8aGZt0Ha4eeyA==",
"http://b2b.tektravels.com/imageresource.aspx?img=VXg3tLzKw7A="
],
"Address": "PROVINCIALEWEG 38 1108 AB AMSTERDAM (SOUTH EAST) THE NETHERLANDS, Amsterdam, Netherlands",
"CountryName": "Netherlands",
"PinCode": null,
"HotelContactNo": "31-20-3121416",
"FaxNumber": "31-20-3121465",
"Email": null,
"Latitude": "52.314318000000000",
"Longitude": "4.993705000000000",
"RoomData": null,
"RoomFacilities": null,
"Services": null
}
}
             })
        res.end()
        chunk=''
       
    })

})
app.use("/gethotelroom" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "GetHotelRoomResult": {
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d",
"IsUnderCancellationAllowed": true,
"IsPolicyPerStay": false,
"HotelRoomsDetails": [
{
"RequireAllPaxDetails": true,
"RoomIndex": 1,
"RoomTypeCode": "SB|0|0|1",
"RoomTypeName": "Standard Single",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98679|1",
"InfoSource": "FixedCombination",
"SequenceNo": "1G~~ACR1~1",
"DayRates": [
{
"Amount": 4620,
"Date": "2016-02-23T00:00:00"
}
],
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 4620,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 4620,
"PublishedPriceRoundedOff": 4620,
"OfferedPrice": 4620,
"OfferedPriceRoundedOff": 4620,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 92.4,
"TDS": 0
},
"RoomPromotion": "",
"Amenities": [
"Room Only"
],
"SmokingPreference": "NoPreference",
"BedTypes": [],
"Supplements": [],
"LastCancellationDate": "2016-02-11T23:59:59",
"CancellationPolicies": [
{
"BaseCurrency": "INR",
"Charge": 0,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2015-10-27T00:00:00",
"ToDate": "2016-02-11T23:59:59"
},
{
"Charge": 1155,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-12T00:00:00",
"ToDate": "2016-02-15T23:59:59"
},
{
"Charge": 4620,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-16T00:00:00",
"ToDate": "2016-02-19T00:00:00"
},
{
"Charge": 100,
"ChargeType": 2,
"Currency": "INR",
"FromDate": "2016-02-19T00:00:01",
"ToDate": "2016-02-24T23:59:59"
}
],
"CancellationPolicy": "Standard Single#^#No cancellation charge, If cancelled between 27-Oct-2015 00:00:00 and 11-Feb-2016 23:59:59.|INR 1155.00 will be charged, If cancelled between 12-Feb-2016 00:00:00 and 15-Feb-2016 23:59:59.|INR 4620.00 will be charged, If cancelled between 16-Feb-2016 00:00:00 and 19-Feb-2016 00:00:00.|100.00% of total amount will be charged, If cancelled between 19-Feb-2016 00:00:01 and 24-Feb-2016 23:59:59.|#!#"
},
{
"ChildCount": 0,
"RequireAllPaxDetails": true,
"RoomIndex": 2,
"RoomTypeCode": "SB|0|0|2",
"RoomTypeName": "Standard Room",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98531|1",
"InfoSource": "FixedCombination",
"SequenceNo": "1G~~ACR1~2",
"DayRates": [
{
"Amount": 5802.5,
"Date": "2016-02-23T00:00:00"
}
],
"SupplierPrice": null,
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 5802.5,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 5802.5,
"PublishedPriceRoundedOff": 5803,
"OfferedPrice": 5802.5,
"OfferedPriceRoundedOff": 5803,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 116.05,
"TDS": 0
},
"RoomPromotion": "",
"Amenities": [
"Room Only"
],
"SmokingPreference": "NoPreference",
"BedTypes": [],
"Supplements": [],
"LastCancellationDate": "2016-02-11T23:59:59",
"CancellationPolicies": [
{
"BaseCurrency": "INR",
"Charge": 0,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2015-10-27T00:00:00",
"ToDate": "2016-02-11T23:59:59"
},
{
"Charge": 1451,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-12T00:00:00",
"ToDate": "2016-02-15T23:59:59"
},
{
"Charge": 5803,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-16T00:00:00",
"ToDate": "2016-02-19T00:00:00"
},
{
"Charge": 100,
"ChargeType": 2,
"Currency": "INR",
"FromDate": "2016-02-19T00:00:01",
"ToDate": "2016-02-24T23:59:59"
}
],
"CancellationPolicy": "Standard Room#^#No cancellation charge, If cancelled between 27-Oct-2015 00:00:00 and 11-Feb-2016 23:59:59.|INR 1451.00 will be charged, If cancelled between 12-Feb-2016 00:00:00 and 15-Feb-2016 23:59:59.|INR 5803.00 will be charged, If cancelled between 16-Feb-2016 00:00:00 and 19-Feb-2016 00:00:00.|100.00% of total amount will be charged, If cancelled between 19-Feb-2016 00:00:01 and 24-Feb-2016 23:59:59.|#!#"
},
{
"ChildCount": 0,
"RequireAllPaxDetails": true,
"RoomIndex": 3,
"RoomTypeCode": "SB|0|0|3",
"RoomTypeName": "Standard Triple",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98680|1",
"InfoSource": "FixedCombination",
"SequenceNo": "1G~~ACR1~3",
"DayRates": [
{
"Amount": 7562.5,
"Date": "2016-02-23T00:00:00"
}
],
"SupplierPrice": null,
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 7562.5,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 7562.5,
"PublishedPriceRoundedOff": 7563,
"OfferedPrice": 7562.5,
"OfferedPriceRoundedOff": 7563,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 151.25,
"TDS": 0
},
"RoomPromotion": "",
"Amenities": [
"Room Only"
],
"SmokingPreference": "NoPreference",
"BedTypes": [],
"Supplements": [],
"LastCancellationDate": "2016-02-11T23:59:59",
"CancellationPolicies": [
{
"BaseCurrency": "INR",
"Charge": 0,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2015-10-27T00:00:00",
"ToDate": "2016-02-11T23:59:59"
},
{
"Charge": 1891,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-12T00:00:00",
"ToDate": "2016-02-15T23:59:59"
},
{
"Charge": 7563,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-16T00:00:00",
"ToDate": "2016-02-19T00:00:00"
},
{
"Charge": 100,
"ChargeType": 2,
"Currency": "INR",
"FromDate": "2016-02-19T00:00:01",
"ToDate": "2016-02-24T23:59:59"
}
],
"CancellationPolicy": "Standard Triple#^#No cancellation charge, If cancelled between 27-Oct-2015 00:00:00 and 11-Feb-2016 23:59:59.|INR 1891.00 will be charged, If cancelled between 12-Feb-2016 00:00:00 and 15-Feb-2016 23:59:59.|INR 7563.00 will be charged, If cancelled between 16-Feb-2016 00:00:00 and 19-Feb-2016 00:00:00.|100.00% of total amount will be charged, If cancelled between 19-Feb-2016 00:00:01 and 24-Feb-2016 23:59:59.|#!#"
}
],
"RoomCombinations": {
"InfoSource": "FixedCombination",
"RoomCombination": [
{
"RoomIndex": [
1
]
},
{
"RoomIndex": [
2
]
},
{
"RoomIndex": [
3
]
}
]
}
}
        })
        res.end()
        chunk=''
       
    })

})

app.use("/blockroom" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "BlockRoomResult": {
"AvailabilityType": "Confirm",
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d",
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"IsPriceChanged": false,
"IsCancellationPolicyChanged": false,
"IsHotelPolicyChanged": true,
"HotelNorms": "City tax and Resort fee are to be paid directly at hotel if applicable.",
"HotelRoomsDetails": [
{
"RequireAllPaxDetails": true,
"RoomIndex": 1,
"RoomTypeCode": "SB|0|0|1",
"RoomTypeName": "Standard Single",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98679|1",
"InfoSource": "FixedCombination",
"SequenceNo": "1G~~ACR1~1",
"DayRates": [
{
"Amount": 4620,
"Date": "2016-02-23T00:00:00"
}
],
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 4620,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 4620,
"PublishedPriceRoundedOff": 4620,
"OfferedPrice": 4620,
"OfferedPriceRoundedOff": 4620,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 92.4,
"TDS": 0
},
"RoomPromotion": "",
"Amenities": [
"Room Only"
],
"SmokingPreference": "NoPreference",
"BedTypes": [],
"Supplements": [],
"LastCancellationDate": "2016-02-11T23:59:59",
"SupplierSpecificData": "City tax and Resort fee are to be paid directly at hotel if applicable.",
"CancellationPolicies": [
{
"BaseCurrency": "INR",
"Charge": 0,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2015-10-27T00:00:00",
"ToDate": "2016-02-11T23:59:59"
},
{
"Charge": 1155,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-12T00:00:00",
"ToDate": "2016-02-15T23:59:59"
},
{
"Charge": 4620,
"ChargeType": 1,
"Currency": "INR",
"FromDate": "2016-02-16T00:00:00",
"ToDate": "2016-02-19T00:00:00"
},
{
"Charge": 100,
"ChargeType": 2,
"Currency": "INR",
"FromDate": "2016-02-19T00:00:01",
"ToDate": "2016-02-24T23:59:59"
}
],
"CancellationPolicy": "Standard Single#^#No cancellation charge, If cancelled between 27-Oct-2015 00:00:00 and 11-Feb-2016 23:59:59.|INR 1155.00 will be charged, If cancelled between 12-Feb-2016 00:00:00 and 15-Feb-2016 23:59:59.|INR 4620.00 will be charged, If cancelled between 16-Feb-2016 00:00:00 and 19-Feb-2016 00:00:00.|100.00% of total amount will be charged, If cancelled between 19-Feb-2016 00:00:01 and 24-Feb-2016 23:59:59.|#!#"
}
]
}

        })
        res.end()
        chunk=''
       
    })

})

app.use("/Book" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({

        })
        res.end()
        chunk=''
       
    })

})

app.use("/GenerateVoucher" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "GenerateVoucherResult": {
"VoucherStatus": true,
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"TraceId": "7895f551-bfc6-4fb8-ace3-01240c660ea4",
"Status": 1,
"HotelBookingStatus": "Confirmed",
"InvoiceNumber": "MW/1516/4343",
"ConfirmationNo": "LL8F392693 - 010/502365",
"BookingRefNo": "502365",
"BookingId": 1302607
}
        })
        res.end()
        chunk=''
       
    })

})

app.use("/GetBookingDetail" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "GetBookingDetailResult": {
"VoucherStatus": true,
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"TraceId": "2809b183-7aa9-4f76-8df3-38011515693d",
"Status": 1,
"HotelBookingStatus": "Confirmed",
"ConfirmationNo": "LL8F392693 - 010/502365",
"BookingRefNo": "502365",
"BookingId": 1302607,
"IsPriceChanged": false,
"IsCancellationPolicyChanged": false,
"HotelRoomsDetails": [
{
"AdultCount": 1,
"ChildCount": 0,
"HotelPassenger": [
{
"Age": 0,
"Email": "shashank@travelboutiqueonline.com",
"FirstName": "GTA",
"LastName": "Service",
"LeadPassenger": true,
"MiddleName": null,
"PassportExpDate": “0001-01-01T00:00:00”,
"PassportIssueDate": “0001-01-01T00:00:00”,
"PassportNo": null,
"PaxType": 1,
"Phoneno": "12345678",
"Title": "mr"
}
],
"RequireAllPaxDetails": false,
"RoomIndex": 1,
"RoomTypeCode": "SB|0|0|1",
"RoomTypeName": "Standard Single",
"RatePlanCode": "001:TUL5:18178:S17929:24963:98679|1",
"DayRates": [
{
"Amount": 4620,
"Date": "2016-02-23T00:00:00"
}
],
"SupplierPrice": null,
"Price": {
"CurrencyCode": "INR",
"RoomPrice": 4620,
"Tax": 0,
"ExtraGuestCharge": 0,
"ChildCharge": 0,
"OtherCharges": 0,
"Discount": 0,
"PublishedPrice": 4620,
"PublishedPriceRoundedOff": 4620,
"OfferedPrice": 4620,
"OfferedPriceRoundedOff": 4620,
"AgentCommission": 0,
"AgentMarkUp": 0,
"ServiceTax": 92.5,
"TDS": 0
},
"RoomPromotion": "",
"Amenities": [
"Room Only"
],
"SmokingPreference": "NoPreference",
"BedTypes": [],
"Supplements": [],
"LastCancellationDate": "2016-02-11T23:59:59",
"CancellationPolicies": [],
"CancellationPolicy": "Standard Single#^#No cancellation charge, If cancelled between 27-Oct-2015 00:00:00 and 11-Feb-2016 23:59:59.|INR 1155.00 will be charged, If cancelled between 12-Feb-2016 00:00:00 and 15-Feb-2016 23:59:59.|INR 4620.00 will be charged, If cancelled between 16-Feb-2016 00:00:00 and 19-Feb-2016 00:00:00.|100.00% of total amount will be charged, If cancelled between 19-Feb-2016 00:00:01 and 24-Feb-2016 23:59:59.|#!#"
}
],
"HotelPolicyDetail": "City tax and Resort fee are to be paid directly at hotel if applicable.",
"InvoiceCreatedOn": "2015-10-27T11:21:43",
"InvoiceNo": "MW/1516/4343",
"HotelConfirmationNo": null,
"HotelName": "Tulip Inn Amsterdam Riverside",
"StarRating": 3,
"AddressLine1": "PROVINCIALEWEG 38 1108 AB AMSTERDAM (SOUTH EAST) THE NETHERLANDS, Amsterdam, Netherlands ZipCode: ",
"AddressLine2": "\n Phone No: 31-20-3121416\n Fax : 31-20-3121465",
"Latitude": "52.314318000000000",
"Longitude": "4.993705000000000",
"City": "Amsterdam",
"CheckInDate": "2016-02-23T00:00:00",
"CheckOutDate": "2016-02-24T00:00:00",
"LastCancellationDate": "2016-02-11T23:59:59",
"NoOfRooms": 1,
"BookingDate": "2015-10-27T11:13:15",
"SpecialRequest": null,
"IsDomestic": false,
"AgentReferenceNo": ""
}
        })
        res.end()
        chunk=''
       
    })

})

app.use("/sendchangerrequest" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "HotelChangeRequestResult": {
            "ChangeRequestStatus": 3,
            "ResponseStatus": 1,
            "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
            },
            "TraceId": "d284143a-594e-471a-876f-5bfe34e30681",
            "ChangeRequestId": 199925
                }
        })
        res.end()
        chunk=''
       
    })

})

app.use("/getchangerequetstatus" ,(req, res ,next)=>{
    req.on('data' , (data)=>{
        chunk += data
    })

    req.on('end' , ()=>{
        res.send({
            "HotelChangeRequestStatusResult": {
"ResponseStatus": 1,
"Error": {
"ErrorCode": 0,
"ErrorMessage": ""
},
"TraceId": "51f76eaf-c4ec-43f7-8d96-6288fcba7da1",
"ChangeRequestId": 199925,
"RefundedAmount": 4262.5,
"CancellationCharge": 450,
"ChangeRequestStatus": 3
}
        })
        res.end()
        chunk=''
       
    })

})

app.listen(3001,  ()=>{
    console.log("Server Running @ http://localhost:3001")
})

