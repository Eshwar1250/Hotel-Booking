// Importing the Express module
const express = require('express')
const morgan = require('morgan')
const  app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended : true }))

const apiAuth = require('./api/auth') 

const apiLogout = require('./api/logout')

const apiBalance = require('./api/balance')

const apiCountryList = require("./api/countrylist")

const apiDestCityList = require("./api/destcitylist")

const apiTopDest = require("./api/topdest")

const apiHotelSearch = require("./api/hotelsearch")

const apiHotelInfo = require("./api/hotelinfo")

const apiGetHotelRoom = require("./api/gethotelroom")

const apiBlockRoom = require("./api/blockroom")

const apiBook = require("./api/book")

const apiGenerateVoucher = require("./api/generatevoucher")

const apiGetBookingDetail = require("./api/getbookingdetail")

const apiSendChangerRequest = require("./api/sendchangerrequest")

const apiGetChangeRequestStatus = require("./api/getchangerequeststatus")
app.use(morgan('dev'))

// For Logging
app.use((req , res , next)=>{
    console.log("Connected")
    if(req.url == "/hotelsearch"){
        app.locals.destination       = req.body.destination_name
    app.locals.check_in_out_dates = req.body.checkin_checkout_date
    }
    
    next()
})
//Receiving the token id as result
app.use('/auth' , apiAuth ,(req , res , next)=>{

})

// Logouts the user
app.use('/logout', apiLogout)

// Receives the Agency Balance and credit

app.use('/balance' , apiBalance , (req ,res ,next)=>{

    // app.locals.tokenid = undefined
})

app.use('/countrylist' , apiCountryList)

app.use('/destcitylist' , apiDestCityList)

app.use('/topdest' , apiTopDest)

app.use('/hotelsearch' , apiHotelSearch , (req , res , next)=>{
    // Saving the data from f-end to access them in apiHotelSearch
    
    res.end("hello this is from app.js")  
    })

app.use('/hotelinfo' , apiHotelInfo)

app.use('/gethotelroom' , apiGetHotelRoom)

app.use('/blockroom' , apiBlockRoom)

app.use('/book' , apiBook)

app.use('/generatevoucher' , apiGenerateVoucher)

app.use('/getbookingdetail' , apiGetBookingDetail)

app.use('/sendchangerrequest' , apiSendChangerRequest)

app.use('/getchangerequeststatus' , apiGetChangeRequestStatus)


app.listen( 3000 , ()=>{

    console.log("Server running at http://localhost:3000")

})

module.exports = app;
