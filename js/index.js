// /*http://api.weatherapi.com/v1/search.json?key=d0e4615c691446378b892208232702&q=lond*/

/*NOTE CARD ONE*/
let documentData = document;
searchBar = documentData.querySelector("#search-bar"),
  today = documentData.querySelector("#today"),
  todayDate = documentData.querySelector("#today-date"),
  locationCity = documentData.querySelector("#location-city"),
  todayDegree = documentData.querySelector("#today-degree"),
  todayIcon = documentData.querySelector("#today-icon"),
  Description = documentData.querySelector("#today-description"),
  humidty = documentData.querySelector("#humidty"),
  wind = documentData.querySelector("#wind"),
  compass = documentData.querySelector("#compass");

/*NOTE CARD TOW AND THREE*/
let nextDay = documentData.getElementsByClassName("nextDay"),
  nextDayIcon = documentData.getElementsByClassName("nextDay-icon"),
  maxDegree = documentData.getElementsByClassName("max-degree"),
  minDegree = documentData.getElementsByClassName("min-degree"),
  nextDayDescription = documentData.getElementsByClassName("nextDay-description"),


  /*NOTE array for Days and Month */
  Month = [`Jan`, `Feb`, `Feb`, `March`, `April`, `June`, `July`, `August`, `September`, `October`, `November`, `December`,],
  Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thurday",
    "Friday",
    "Saturday",
  ],
  /*NOTE Date method 34an ageb mnha (days,month) :Syntax Date() ==> nameOfArray.[date.getMonth() or date.getday()] */
  /*NOTE getDay=> day of week , getDate=> day of month*/

  resposeApi,/*NOTE -  lazem a5lehom Global 34an a2dr A Reusable lehom fe akter mn mkan*/
  resonseData,/*NOTE  Daa 4ayel el data bta3t api Wee global brdo*/
  country = "cairo"; /*//NOTE   da golbal 34an y4el el values bta3t el country we yt7at fe link api */



async function weatherData() {
  resposeApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${country}&days=3`)
  resonseData = await resposeApi.json()
  console.log(resonseData);
  /*NOTE LAZEM ANDY 3LA FUNCTION BTAT EL DISPLAY ==> displayTodayWeather()  BA3D MA EL DATA BTA3TY TEGE MN FUCTION BTA3T  weatherData() */
  displayTodayWeather()
  displAnotherCards()
}





function displayTodayWeather() {
  let date = new Date();
  today.innerHTML = Days[date.getDay()]
  todayDate.innerHTML = `${date.getDate()} ${Month[date.getMonth()]}`
  locationCity.innerHTML = resonseData.location.name
  todayDegree.innerHTML = resonseData.current.temp_c
  todayIcon.setAttribute("src", `https:${resonseData.current.condition.icon}`)
  Description.innerHTML = resonseData.current.condition.text
  humidty.innerHTML = resonseData.current.humidity;
  wind.innerHTML = resonseData.current.wind_mph;
  humidty.innerHTML = resonseData.current.wind_dir

}

function displAnotherCards() {
  for (let i = 0; i < nextDay.length; i++) {
    nextDay[i].innerHTML = Days[new Date(resonseData.forecast.forecastday[i + 1].date).getDay()]
    nextDayIcon[i].setAttribute("src", `https:${resonseData.forecast.forecastday[i + 1].day.condition.icon}`)
    maxDegree[i].innerHTML = resonseData.forecast.forecastday[i + 1].day.maxtemp_c
    minDegree[i].innerHTML = resonseData.forecast.forecastday[i + 1].day.mintemp_c
    nextDayDescription[i].innerHTML = resonseData.forecast.forecastday[i + 1].day.condition.text
  }

}


searchBar.addEventListener("keyup", function () {
  country = searchBar.value;
  console.log(searchBar);
  weatherData()
})