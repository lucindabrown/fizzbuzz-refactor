function fizzbuzzer(max) {

  function check(n) {
  var msg = '';    
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }

  for (var i = 1; i <= max; i++) {
    console.log(check(i));
    //cPrint = consolePrinter.printLine(check(i));
  }

}

function getNumber(){
	var numToFizz = "notanumber";
	var intCheck = parseInt(numToFizz,10);
	console.log(intCheck);
	while(isNaN(intCheck)){
		numToFizz = prompt("What number would you like to fizzbuzz?");
		console.log(numToFizz);
		return numToFizz;
}
}

function Printer(divId) {
  var lineCount = 1;

  this.printLine = function() {
    var m = lineCount + ': '; 
    for (var i = 0; i<arguments.length; i++){
     // for each argument, add it to the variable m plus a space afterwards
     m += arguments[i] + ' ';
          } 
    var n = document.createElement("pre"),    // create a new 'pre' element
        t = document.createTextNode(m); // create a text node to hold our message
console.log(n);
console.log(t);
    n.appendChild(t); // append your text to the pre element
    document.getElementById(divId).appendChild(n); // append your element to the #divID element
   
   lineCount++; // increase our counter
  }
}

var numToFizzBuzz = getNumber();
fizzbuzzer(numToFizzBuzz);
var consolePrinter = new Printer('console');
    cPrint = consolePrinter.printLine('hi','how are you', 'bye');
var luPrinter = new Printer('luDiv');
    cPrint = luPrinter.printLine('now', 'I', 'have', "2");
cPrint = luPrinter.printLine('now', 'I', 'have', 'another');