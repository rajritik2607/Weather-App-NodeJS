const request = require('request')


const geocode = (address, callback) => {

    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmFqcml0aWsyNiIsImEiOiJja213ZnVwczEwZXA2MnFwcWhkZmJkcnRnIn0.4860QY9E32uu2z8hHcsnmA&limit=1'
    request({url: url1, json: true},(error,response)=>{
            if(error)
            {
                console.log('Error in connection')
            }
            else if(response.body.features.length === 0)
            {
                console.log('Cannot find the location')
            }
            else
            {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const location = response.body.features[0].place_name
            callback(latitude, longitude, location)}
        })
}

module.exports = geocode