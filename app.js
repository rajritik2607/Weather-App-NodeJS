const request = require('request')
const geocode = require('./utils/geocode')


const address = process.argv[2]
const currentWeather = (lat, lon, callback) => {
    const url1 = 'http://api.weatherstack.com/current?access_key=c9b31f78d49a209670a434621d09eacf&query='+lat +','+lon

    request({url: url1, json: true},(error, response) => {
            if(error)
            {
                console.log('Error in connection')
            }
            else if(response.body.error)
            {
                console.log('Cannot find the location')
            }
            else{
            console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature + ' degree celcius. It feels like  ' + response.body.current.feelslike + ' degrees out')
         
        }
    })   

}

geocode(address, (data1, data2, data3) => {
    currentWeather(data1, data2)
    console.log(data3)
}) 