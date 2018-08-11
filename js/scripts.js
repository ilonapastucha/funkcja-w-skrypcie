"use strict";
(function(){
	var enter = function(){
		return '<br><br>';
	};

	var calcToF = function(temp){
		return (temp *1.8 + 32);
	};

	var seasonFromTemp = function(temp) {
		if (temp <=5) {
			return 'witer';
		} else if (temp >5 && temp <= 15){
			return 'autumn';
		} else if (temp >15) {
			return 'summer';
		}
	};

	var waterState = function(temp){
		if (temp <= 0) {
			return 'State of water concentration: ice.';
		} else if (temp < 100) {
			return 'State of water concentration: liquid.';
		} else if (temp >= 100) {
			return 'State of water concentration: gas.';
		}
	};

	var calcToC = function(temp){
		return ((temp - 32)/1.8);
	};


	var calcToCFloat = function(temp){
		return ((temp - 32)/1.8);
	};

	var isProperlyTemperature = function(temp) {
		return (isNaN(parseFloat(temp)) || temp === '' || temp == null) ? true : false;
	};

	var celciusConvertionOutput = document.getElementById('greeter-output');

	celciusConvertionOutput.innerHTML = 'Click the button to temperature!' + enter() + celciusConvertionOutput.innerHTML; 

	var celciusConvertionButton = document.getElementById('greeter-button');

	var fahrenheitConvertionButton= document.getElementById('green-button');


	var fahrenheitConvertionOutput = document.getElementById('green-output');
	fahrenheitConvertionOutput.innerHTML = 'Click the button to temperature!' + enter() + fahrenheitConvertionOutput.innerHTML;

	

	celciusConvertionButton.addEventListener('click', function(){
		var temperature = window.prompt('What is the temperature in Celsius?');
		celciusConvertionOutput.innerHTML ='';	

		if ( isProperlyTemperature(temperature)) {
			celciusConvertionOutput.innerHTML = 'No value entered!' + enter() + celciusConvertionOutput.innerHTML;
		}
		else {
			temperature = parseFloat(temperature);
			celciusConvertionOutput.innerHTML = waterState(temperature) + enter() + 'At this temperature we have ' + seasonFromTemp(temperature) + '.' + enter() + 'Your temperature in Celsius is '+ temperature +' in Fahrenheit is '+ calcToF(temperature) + '!' +  enter() + celciusConvertionOutput.innerHTML;
		}
	}); 

	fahrenheitConvertionButton.addEventListener('click', function(){
		var temperature = window.prompt('What is the temperature in Fahrenheit?');
		fahrenheitConvertionOutput.innerHTML = '';

		if ( isProperlyTemperature(temperature)){
		fahrenheitConvertionOutput.innerHTML = 'No value entered!' + enter() + fahrenheitConvertionOutput.innerHTML;
		}
		else {
			var tempInC = calcToCFloat(parseFloat(temperature));
			fahrenheitConvertionOutput.innerHTML = waterState(tempInC) + enter() + 'At this temperature we have ' + seasonFromTemp(tempInC) + '.' + enter() + 'Your temperature in Fahrenheit is '+ temperature +' in Celsius is ' + calcToC(temperature) + '!' + enter() + fahrenheitConvertionOutput.innerHTML;
		}
	}); 
})();