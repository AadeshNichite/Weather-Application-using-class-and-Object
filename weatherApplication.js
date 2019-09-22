// WeatherApp
// Author: Aadesh 
// App indicates whether information about the city.
// It will indicate temprature of city in both celcius and ferinite

//class cityInfo Contains cities information
class CityInfo{
    constructor(city)
    {
        this.city=city;
        this.weather=[
            {city:"Pune",state:"Maharashtra", weather:"Cloudy",temperature:32,icon:"⛅"},
            {city:"Kolhapur",state:"Maharashtra", weather:"Rainy",temperature:26,icon:"🌧️"},
            {city:"Banglore",state:"Karnataka", weather:"Sunny",temperature:28,icon:"☀️"},
            {city:"Mumbai",state:"Maharashtra", weather:"Rainy",temperature:29,icon:"🌧️"},
            {city:"Chennai",state:"Tamilnadu", weather:"Sunny",temperature:30,icon:"☀️"},
            {city:"Dehli",state:"Dehli", weather:"Cloudy", temperature:28,icon:"⛅"},
            {city:"Hyderabad",state:"Andhrapradesh",weather:"Sunny",temperature:30,icon:"☀️"},
            {city:"Belgaum",state:"Karnataka", weather:"Rainy",temperature:"25",icon:"🌧️"}
        ]
    }
}

class Info
{
     //display day and date
     displayDate()
     {
         var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
         var newD = new Date();
         var n = newD.getDay()
         let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
          document.getElementById("day").innerHTML =week[n]+" , "+d;
     }
     //display whole information about city and temperature in celcius
     showInfo(cityInfoVal){

        let resultcity=cityInfoVal.city;
        let selectedCity=cityInfoVal.weather.find(v=>{return v.city==resultcity})
        document.getElementById("state").innerHTML=selectedCity['city']+","+selectedCity['state'];
        document.getElementById("condition").innerHTML=selectedCity['weather']+selectedCity['icon'];
        document.getElementById("temp").innerHTML=selectedCity['temperature'];
    }
     //display whole information about city and temperature in fahrenheit
    displayFahrenheit(cityInfoVal){

        let resultcity=cityInfoVal.city;
        let selectedCity=cityInfoVal.weather.find(v=>{return v.city==resultcity}); 
        let fahTemp=Math.round((selectedCity.temperature*1.8)+32);
        console.log(fahTemp);
        document.getElementById("temp").innerHTML=fahTemp;
    
    }
  
}

Info=new Info();
Info.displayDate();
Info.displayDate('kolhapur');

//display city details
document.getElementById("btn").addEventListener("click",function displayDate(e){
    let result=document.getElementById("city").value;
    let cityInfoVal=new CityInfo(result);
    Info.showInfo(cityInfoVal);
})

//display temperature in Fahrenheit
document.getElementById("button2").addEventListener("click",function displayDate(e){

    let result=document.getElementById("city").value;
    let cityInfoVal=new CityInfo(result);
    console.log("Ferinite");
    Info.displayFahrenheit(cityInfoVal);
})


//display temperature in celcius
document.getElementById("button1").addEventListener("click",function displayDate(e){
    let result=document.getElementById("city").value;
    let cityInfoVal=new CityInfo(result);
    Info.showInfo(cityInfoVal);
})
