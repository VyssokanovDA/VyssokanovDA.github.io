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
	//console.log(product);
	product[0].innerHTML = '';

	for(var i=0; i<products.length; i++){
		var item = document.createElement('div');
		item.className = 'col-md-4 product';
		var img = document.createElement('img');
		img.className = 'product-image';
		img.src = './public/img/product.jpg';

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
var arrProduct = [type, category, color, parameter];
var targ = new Array('', '', '', '');

arrProduct.forEach(function(arritem, index, arr) {	
	arritem.addEventListener('change', function(e){		
		targ[index] = e.target.value;
		console.log(targ[index]);		
		if(e.target.value == ''){
			createProducts(products);
		}else{
			var newProducts = products.filter(function(item){
				return (item.type == targ[0]) && (item.category == targ[1]) && (item.color == targ[2]) && (item.parameter == targ[3]);
			})			
			createProducts(newProducts);
		}
	})
})


