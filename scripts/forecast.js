const key = config.SECRET_API_KEY

// get weather information
const getWeather = async (id) => {
    
    // resource url 
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    // query parameters
    const response = await fetch(base + query)
    const data = await response.json()

    return data

}

// get city information
const getCity = async (city) => {

    // resource url   
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    // query parameters
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    // need Key field
    return data[0]

}
