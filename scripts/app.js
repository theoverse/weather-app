const cityForm = document.querySelector('form')

const updateCity = async (city) => {

    const cityInfo = await getCity(city)
    const weather = await getWeather(cityInfo.Key)

    return {
        cityInfo: cityInfo,
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault()

    // get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // update ui with new city
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})