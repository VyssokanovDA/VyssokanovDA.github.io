var elType = document.getElementById('type');
var elCategory = document.getElementById('category');
var elColor = document.getElementsByClassName('color');
var elParameter = document.getElementsByClassName('parameter');

var arr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arr.includes(item["type"]))
		//Добавление в массив
	arr.push(item["type"]);
})

for(var i=0; i<arr.length; i++){
	var option = document.createElement('option');
	option.text = arr[i];
	elType.appendChild(option);
}

var arr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arr.includes(item["category"]))
		//Добавление в массив
	arr.push(item["category"]);
})

for(var i=0; i<arr.length; i++){
	var option = document.createElement('option');
	option.text = arr[i];
	elCategory.appendChild(option);
}

var arr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arr.includes(item["color"]))
		//Добавление в массив
	arr.push(item["color"]);
})

for(var i=0; i<arr.length; i++){
	var label = document.createElement('label');
	var input = document.createElement('input');
	var br = document.createElement('br');
	input.type = "radio";
	input.name = "color";
	input.value = arr[i];
	input.checked = 0;
	label.textContent = arr[i];	
	elColor[0].firstElementChild.appendChild(br);
	elColor[0].firstElementChild.appendChild(label);	
	label.insertBefore(input, label.firstChild);	
}

var arr = [];
products.forEach(function(item){
	//Проверка на нахождении элемента в массиве
	if(!arr.includes(item["parameter"]))
		//Добавление в массив
	arr.push(item["parameter"]);
})

for(var i=0; i<arr.length; i++){
	var label = document.createElement('label');
	var input = document.createElement('input');
	var br = document.createElement('br');
	input.type = "radio";
	input.name = "parameter";
	input.value = arr[i];
	input.checked = 0;
	label.textContent = arr[i];	
	elParameter[0].firstElementChild.appendChild(br);
	elParameter[0].firstElementChild.appendChild(label);	
	label.insertBefore(input, label.firstChild);	
}

function createProducts(products){
	var product = document.getElementsByClassName('products');	
	product[0].innerHTML = '';
	for(var i=0; i<products.length; i++){
		var item = document.createElement('div');
		item.className = 'col-md-4 product';
		var img = document.createElement('img');
		img.className = 'product-image';
		img.src = './public/img/' + String(products[i].img);
		var name = document.createElement('div');
		var elType = document.createElement('div');
		var elCategory = document.createElement('div');
		var elColor =  document.createElement('div');
		var elParameter =  document.createElement('div');
		name.innerText = products[i].name;
		elType.innerText = products[i].type;
		elCategory.innerText = products[i].category;
		elColor.innerText = products[i].color;
		elParameter.innerText = products[i].parameter;
		item.appendChild(name);		
		item.appendChild(img);
		item.appendChild(elType);
		item.appendChild(elCategory);
		item.appendChild(elColor);
		item.appendChild(elParameter);
		product[0].appendChild(item);
	}
}

createProducts(products);

var type = document.getElementById('type');
var category = document.getElementById('category');
var elColor = document.getElementsByClassName('color');
var color = elColor[0];
var elParameter = document.getElementsByClassName('parameter');
var parameter = elParameter[0];
//массив элементов, предназначенных для выбора параметров
var arrProduct = [type, category, color, parameter];
//перебор элементов для запуска метода addEventListener
arrProduct.forEach(function(arritem, index, arr) {	
	arritem.addEventListener('change', function(e){		
		//Восстановление массива newProducts
		var newProducts = products;		
		//перебор элементов для последовательной фильтрации
		arrProduct.forEach(function(arritem1, index1, arr1) {
			//приводим элементы color и parameter к общему виду (для определения у них свойства value)
			arritem1 = (arritem1.className == 'color') ? arritem1.querySelector(':checked') : arritem1;
			arritem1 = (arritem1.className == 'parameter') ? arritem1.querySelector(':checked') : arritem1;
			//проверка, выбрано ли "Все"
			if (arritem1.value != '') {
				//Если не все, то фильтр
				newProducts = newProducts.filter(function(item){
					return (item[Object.keys(newProducts[0])[index1 + 1]] == arritem1.value);
				})					
			}	
		})
		//вызов функции, выводящей на экран продукты
		createProducts(newProducts);
	})
})