// Base URL and API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=5beb43e13dc3fa8be428191e6e50a00c&units=metric';

//Get the date
let date = new Date();
let newDate = (date.getMonth()+1) + '.' + date.getDate() + '.' + date.getFullYear();

/* Function to GET API data */
const getData = async (baseURL, newZip) => {
  const response = await fetch(baseURL + newZip + apiKey);
  try {
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const request = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      date : data.date,
      temp : data.temp,
      content : data.content
    })
  })

  try {
    const newData = await request.json();
    return newData;
  }
  catch (error) {
    console.log(error);
  }
}

// updat ui
const retrieveData = async () => {
  const request = await fetch(`http://localhost:8001/all`);
  try {
    const data = await request.json()
    document.getElementById('date').innerHTML = 'Date: ' + data.date;
    document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(data.temp) + ' degrees';
    document.getElementById('content').innerHTML = 'User response: ' + data.content;
	  document.getElementById('entryHolder').style.visibility = "visible";
  }
  catch (error) {
    console.log("error", error);
  }
}

// Adding Event listener
document.getElementById('generate').addEventListener('click', takeAction);

function takeAction(event) {
  event.preventDefault();

  const newZip = document.getElementById('Zipcode').value;
  const feelings = document.getElementById('feelings').value;

  getData(baseURL, newZip, apiKey)
    .then(function (data) {
      postData('http://localhost:8001/add', { date: newDate, temp: data.main.temp, content: feelings })
    }
    ).then(function (data) {
      retrieveData()
    })
}
