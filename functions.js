function sumOfSquares (x, y) {
  return (x*x*x) % (y*y*y);
}

alert(sumOfSquares (6, 8));

function marvinTheCoverter () {
	var celsius = prompt('What is the temperature outside, in °C?');
	var fahrenheit = celsius * 9 / 5 + 32;
	alert('Nice! Did you know that this is a swell ' + fahrenheit + ' degrees in Fahrenheit?');
	return;
};

marvinTheCoverter ();

function nivramTheCoverter () {
	var fahrenheit = prompt('What is the temperature outside, in °Fahrenheit?');
	var celsius = (fahrenheit - 32) * 5 / 9;
	alert('Nice! Did you know that this is a swell ' + celsius + ' degrees in Celsius?');
	return;
};

nivramTheCoverter ();

var celsius = 19;

function marvinTheConverter (){
  var celsius = 24;
  var fahrenheit = celsius * 9 / 5 + 32;
  alert('Nice! Did you know that this is a swell ' + fahrenheit + ' degrees in Fahrenheit?');
  return;
};

marvinTheConverter();

console.log(celsius);