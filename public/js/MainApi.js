const search = document.getElementById("SearchBtn");
const error = document.getElementById("Error");
const input = document.getElementById("input");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const country = document.getElementById("country");
const weatherType = document.getElementById("weatherType");
const inputVal = input.value;
const getInfo = async (event) => {
  event.preventDefault();
  const inputVal = input.value;
  if (inputVal === "") {
    error.innerHTML = "Pls Enter The Value ";
  } else {
    error.innerHTML = "";
    try {
      let APIKEY = `c6a31b06c95c3cccaafed194c520fb2e`;
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=${APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrdata = [data];
      temp.innerHTML = arrdata[0].main.temp;
      country.innerText = arrdata[0].sys.country;
      city.innerText = `${inputVal}, `;
      const weatherMood = arrdata[0].weather[0].main;
      //  set sunny and cloudy
      if (weatherMood == "Clear") {
        weatherType.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc86' ></i>";
      }
      else if(weatherMood == "Clouds") {
        weatherType.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6' ></i>";
      }
      else if(weatherMood == "Rain"){
        weatherType.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#f1f2f6' ></i>";
      }
      else{
        weatherType.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc86' ></i>";
      }
    } catch (err) {
      console.log(err);
      error.innerHTML = "Pls Enter The Right Value ";
    }
  }
};

search.addEventListener("click", getInfo);



// date and  time  finder
  
const getDates=()=>{
  let weekday=new Array(7);
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";
  let currentDate=new Date();
  days= weekday[currentDate.getDay()];
  //day find
  let day=document.getElementById("Day");
  day.innerText=days;

  let date=document.getElementById("Date")
  let dayDate = currentDate.getUTCDate();
    date.innerText=`${dayDate}  `;
  //month find
  let monthDate=document.getElementById("month")
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let months = month[currentDate.getUTCMonth()];
  monthDate.innerText=months ;
  console.log(days);
  console.log(months);
}
getDates();
