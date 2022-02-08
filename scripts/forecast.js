const key = config.SECRET_API_KEY

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

getCity('miami')
    .then(data => console.log(data))
    .catch(err => console.log(err))