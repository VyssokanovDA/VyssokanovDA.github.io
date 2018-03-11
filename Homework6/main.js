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
var operator = ""; //строковое значение операции
var result; //результат
var q = 0; //флаг повторной операции
var o = ""; //флаг сброса текстового поля

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event){
		if (o) {
			if (!(o == 1)) {q = 1;} 
			entries.value = "";
			o = "";
		}
		entries.value += event.target.textContent;
		console.log(event.target.textContent);		
	})
}
for (var i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", function(event){		
		console.log(q);
		if (q) {
			calc(result);
		}else{
			result = +entries.value;
		}
		entries.value = result;
		operator = event.target.textContent;
		o = operator;					
		//console.log(event.target.textContent);		
	})
}
	
	clear.addEventListener("click", function(event){
		entries.value = "";
		q = 0;
		o = "";
		console.log(event.target.textContent)
	});

	calculate.addEventListener("click", function(event){
		console.log(event.target.textContent)
		if (q) {
			calc(result);
		}else{
			result = +entries.value;
		}
		entries.value = result;
		q = 0;
		o = 1;
	});


function calc(r){
	switch(operator) {
		case "+":
		result = r + +entries.value;		
		break;
		case "-":
		result = r - +entries.value;		
		break;
		case "*":
		result = r * +entries.value;		
		break;
		case "/":
		result = r / +entries.value;		
		break;
		default:
	}
}