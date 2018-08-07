"use strict";
(function(){
	var enter = function(){
		var result = '<br><br>';
		return result;
	};

	var multipl = 1.8;
	var inc = 32;
	var calcToF = function(temp){
		var result = 'Your temperature in Celsius is '+temp+' in Fahrenheit is '+(temp * multipl + inc)+ '!';
		return result;
	};

	var waterState = function(temp){
		if (temp <= 0) {
			var result = 'State of water concentration: ice.';
		} else if (temp < 100) {
			var result = 'State of water concentration: liquid.';
		} else if (temp >= 100) {
			var result = 'State of water concentration: gas.';
		}
		return result;
	};

	var divide = 1.8;
	var subtr = 32;
	var calcToF = function(temp){
		var result = 'Your temperature in Fahrenheit is '+temp+' in Celsius is '+((temp - subtr)/ divide )+ '!';
		return result;
	};

	var output = document.getElementById('greeter-output');

	output.innerHTML = 'Click the button to convert!' + enter() + output.innerHTML; 

	var button = document.getElementById('greeter-button');

	var temperature;



	var button2= document.getElementById('green-button');

	var convert; 

	var writer = document.getElementById('green-output');
	writer.innerHTML = 'Click the button to convert!' + enter() + writer.innerHTML;

	

	button.addEventListener('click', function(){
		temperature = window.prompt('What is the temperature in Celsius?');
		output.innerHTML ='';	

		if ( isNaN(temperature) || temperature === '' || temperature == null || temperature === NaN) {
			output.innerHTML = 'No value entered!' + enter() + output.innerHTML;
		}
		else {
			output.innerHTML = waterState(temperature) + enter() + output.innerHTML;
			if (temperature <= 5) {
				output.innerHTML = 'At this temperature we have winter.' + enter() + output.innerHTML;
			} else if (temperature > 5 && temperature <= 15) {
				output.innerHTML = 'At this temperature we have autumn.' + enter() + output.innerHTML;
			} else if (temperature > 15) {
				output.innerHTML = 'At this temperature we have summer' + enter() + output.innerHTML;
			}
			output.innerHTML = calcToF(temperature) + enter() + output.innerHTML; 
		}
	}); 

	button2.addEventListener('click', function(){
		convert = window.prompt('What is the temperature in Fahrenheit?');
		writer.innerHTML = '';

		if (isNaN(convert) || convert === '' || convert == null || convert == NaN){
		writer.innerHTML = 'No value entered!' + enter() + writer.innerHTML;
		}
		else {
			if (convert <= 32) {
				writer.innerHTML = 'State of water concentration: ice.' + enter() + writer.innerHTML;
			} else if (convert < 212) {
				writer.innerHTML = 'State of water concentration: liquid.' + enter() + writer.innerHTML;
			} else if (convert >= 212) {
				writer.innerHTML = 'State of water concentration: gas.' + enter() + writer.innerHTML;
			}
			if (convert <= 41) {
				writer.innerHTML = 'At this temperature we have winter.' + enter() + writer.innerHTML;
			} else if (convert >41 && convert <=59) {
				writer.innerHTML = 'At this temperature we have autumn.' + enter() + writer.innerHTML;
			} else if (convert > 59) {
				writer.innerHTML = 'At this temperature we have summer' + enter() + writer.innerHTML;
			}
			writer.innerHTML = calcToF(convert) + enter() + writer.innerHTML;
		}
	}); 
})();