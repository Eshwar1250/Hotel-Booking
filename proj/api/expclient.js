const request = require('request')

request.post('http://127.0.0.1:3000/data/:'+123  ,{form:{name:'suhas'}} ,(err , res , body)=>{

    // console.log("respose is :",body)
    const responseData = JSON.parse(body)
    if (responseData.Status === '1'){
        
    }
    console.log("Status is :",responseData.Id)
} )