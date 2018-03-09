//Числа
var numbers = document.getElementsByClassName('numbers');
//Операции
var operations = document.getElementsByClassName('operations');
//Очистка
var clear = document.getElementById('clear');
//Поле инпут
var entries = document.getElementById('entries');
//Кнопка равно
var calculate = document.getElementById('calculate');
var operator = "";

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event){
		entries.value += event.target.textContent;
		console.log(event.target.textContent)
	})
}
for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", function(event){
		if (!hasMathSymbol() && entries.value) {
		entries.value += event.target.textContent;
		operator = event.target.textContent;
		}
		console.log(event.target.textContent);
	})
}

	clear.addEventListener("click", function(event){
		entries.value = "";
		console.log(event.target.textContent)
	});


	entries.addEventListener("click", function(event){
		console.log(event.target.textContent)
	});


	calculate.addEventListener("click", function(event){
		console.log(event.target.textContent)
	});

function hasMathSymbol(){
	var val = entries.value;
	if ((val.indexOf('+') + 1) || (val.indexOf('-') + 1) || (val.indexOf('*') + 1) || (val.indexOf('/') + 1))
		return true;
	return false;
}