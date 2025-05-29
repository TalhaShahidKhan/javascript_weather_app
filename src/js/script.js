const showWeatherData = async (city) => {
  let request = await fetch(`https://api.weatherapi.com/v1/current.json?key=70dfae09bc26405bbbe61214252905&q=${city}&api=yes`, {
    method: "GET"
  })

  let res = await request.json()
  return res
}



let loader = `<div class="loader">
          <div class="loader__inner"></div>
          <div class="loader__orbit">
            <div class="loader__dot"></div>
            <div class="loader__dot"></div>
            <div class="loader__dot"></div>
            <div class="loader__dot"></div>
          </div>
        </div>`







let resultElem = document.getElementById('result')
let inputElm = document.getElementById('default-search')

document.getElementById('searchbtn').addEventListener('click', async (e) => {
  if (!inputElm.value) {
    resultElem.firstElementChild.innerHTML = "Please Enter a city first"
    return
  }
  resultElem.innerHTML = loader
  const response = await showWeatherData(inputElm.value)
  console.log(response)
  console.log(typeof response)
  if (typeof response != "object") {
    resultElem.firstElementChild.innerHTML = "There is an error"
    return
  }

  let city = response.location.name
  let celciusTemp = response.current.temp_c
  let condition = response.current.condition.text
  let kphWind = response.current.wind_kph
  let humidity = response.current.humidity
  let mbPressure = response.current.pressure_mb
  let visibility = response.current.vis_km
  let feelsLike = response.current.feelslike_c
  let windDirection = response.current.wind_dir
  let dewPoint = response.current.dewpoint_c
  let uvIndex = response.current.uv
  let heatIndex = response.current.heatindex_c

  const resultHTML = `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Weather Result for ${city}</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date about the Weather with SkyLine</p>
        <div class="w-3/4 py-3 my-2 flex flex-col  items-center justify-evenly gap-3">
          <div
            class="bg-gray-200 dark:bg-gray-600 border-2 border-transparent rounded-4xl py-5 px-9 w-full flex items-center  justify-around gap-2 ">
            <div class="flex flex-col items-start justify-center gap-7 py-4">
              <h1 class="text-9xl font-bold dark:text-white">${celciusTemp} <sup>o</sup>C</h1>
              <h2 class="text-4xl font-bold dark:text-white">${condition}</h2>
              <h2 class="text-2xl font-bold dark:text-white">Feels Like : ${feelsLike} <sup>o</sup>C</h2>
            </div>
            <div>
              <img src="http://cdn.weatherapi.com/weather/64x64/day/308.png" width="100px" alt="condition icon">
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4   py-5 px-5 w-full">
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Wind</h5>
              <h6 class="text-2xl font-semibold"> ${kphWind} kmh<sup>-1</sup> to ${windDirection}</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Humidity</h5>
              <h6 class="text-2xl font-semibold"> ${humidity}%</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Pressure</h5>
              <h6 class="text-2xl font-semibold">${mbPressure} mb</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Visibility</h5>
              <h6 class="text-2xl font-semibold">${visibility} km</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Dew Poind</h5>
              <h6 class="text-2xl font-semibold">${dewPoint} <sup>o</sup>C</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> UV Index</h5>
              <h6 class="text-2xl font-semibold">${uvIndex}</h6>
            </div>
            <div
              class="px-3 py-4 w-1/5 dark:text-white bg-gray-200 dark:bg-gray-600 rounded-4xl flex min-h-[20vh] flex-col items-center justify-evenly">
              <h5 class="text-4xl font-bold"> Heat Index</h5>
              <h6 class="text-2xl font-semibold">${heatIndex} <sup>o</sup>C</h6>
            </div>

          </div>

        </div>`


        resultElem.innerHTML = resultHTML
})