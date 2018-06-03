$(document).ready(function(){
	var elType = $('#type');
	var elCategory = $('#category');
	var elColor = $('.color');
	var elParameter = $('.parameter');
	var arrType = [];
	var arrCategory = [];
	var arrColor = [];
	var arrParameter = [];

	$(products).each(function(index, item){		
		if (!($.inArray(item.type, arrType) + 1)){
		    arrType.push(item.type);
		    elType.append("<option>" + item.type + "</option>");
        }
        if (!($.inArray(item.category, arrCategory) + 1)){
            arrCategory.push(item.category);
            elCategory.append("<option>" + item.category + "</option>");
        }
        if (!($.inArray(item.color, arrColor) + 1)){
            arrColor.push(item.color);
            elColor.children().first().append("<br><label><input type=\"radio\" name=\"color\" value=\"" + item.color + "\">" + item.color + "</label></div>");
        }
        if (!($.inArray(item.parameter, arrParameter) + 1)){
            arrParameter.push(item.parameter);
            elParameter.children().first().append("<br><label><input type=\"radio\" name=\"parameter\" value=\"" + item.parameter + "\">" + item.parameter + "</label></div>");
        }
    });	

    function createProducts(products){
    	var product = $('.products');
    	product.empty();
    	$(products).each(function(index, item){
    		product.append("<div class=\"col-md-4 product\"><div>" + item.name + "</div><img class=\"product-image\" src=\"./public/img/" + item.img + "\"</img><div>" + item.type + "</div><div>" + item.category + "</div><div>" + item.color + "</div><div>" + item.parameter + "</div></div>");
    	})
    }

	createProducts(products);
	
	//массив элементов, предназначенных для выбора параметров
	var arrProduct = $("#type, #category, .color:first, .parameter:first");	
	$(arrProduct).change(function(){		
		//Восстановление массива newProducts
		var newProducts = products;		
		//перебор элементов для последовательной фильтрации
		$(arrProduct).each(function(index, arritem){
			//приводим элементы color и parameter к общему виду (для определения у них свойства val)
			if ($(arritem).hasClass('color')){
				arritem = $(':checked', arritem);
			} 
			if ($(arritem).hasClass('parameter')){
				arritem = $(':checked', arritem);
			} 				
			//проверка, выбрано ли "Все"
			if ($(arritem).val() != '') {
				//Если не все, то фильтр
				newProducts = $(newProducts).filter(function(){
					return this[Object.keys(newProducts[0])[index + 1]] == $(arritem).val();
				})					
			}	
		})
		//вызов функции, выводящей на экран продукты
		createProducts(newProducts);
	})	
})