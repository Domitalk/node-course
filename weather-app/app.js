const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=2d28b08cf289e7512cb451def5d6931b&query=New%20York';

request({ url, json: true }, (error, response) => {
    const currentWeather = response.body.current

    console.log(currentWeather)
})