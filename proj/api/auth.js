// Importing frameworks
const express = require('express') ,
      request = require('request')
const app = express()
// Setting up the router
const router = express.Router();
var Tokenid = ''

// Handling the request from app.js
router.get('/' , (httprequest ,httpresponose , next)=>{
    //Here we receive the req from app.js (express)
   
    const data={
        // TODO : ADD REQUIRED REQUEST DATA
        }

        // TODO : make this request.post await
    request.post(
        {
            url :'http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate', 
            body: data ,
            json: true ,
            headers: {'contentType': 'application/json'}
        } ,

        (err ,  httpResponse , body)=>{
            if (err)
                console.log({"message" : err});
            else {
                console.log({"message": JSON.stringify(body)})
                httprequest.app.locals.tokenid =body.TokenId
                httpresponose.status(200).json(body)
            }
        });    

})

module.exports = router