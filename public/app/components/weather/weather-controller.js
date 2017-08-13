function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);

		var boise = weather.name
		var temp = ((weather.main.temp * (9/5)) - 459.67)
		temp = Math.floor(temp)
		
		var template = `
			<div id="temp">${temp} °F</div>
			<div id="location">${boise}, Idaho, U.S.A.</div>
		`
		//Idaho will not be applicable if using out of state, so change later
		document.getElementById('weather').innerHTML = template

	})

}
