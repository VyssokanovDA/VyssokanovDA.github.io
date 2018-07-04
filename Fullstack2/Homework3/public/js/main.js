new Vue({
	el: '#app',
	data:{
		products: products,
		type: '',
		category: '',
		color: '',
		parameter: '',
		test: '',
		test2: '',
		inputValue: ''
	},                          
	methods:{
		getFeatures(par){
			let arr = [];
			this.products.forEach(item => {
				if(!arr.includes(item[par])) 
					arr.push(item[par])
			})
			return arr
		}
	},
	computed:{
		getProducts(){
			let arr1 = this.products.slice();
			if(this.type) 
				arr1 = arr1.filter(item => item.type === this.type)
			if(this.category) 
				arr1 = arr1.filter(item => item.category === this.category)
			if(this.color) 
				arr1 = arr1.filter(item => item.color === this.color)
			if(this.parameter) 
				arr1 = arr1.filter(item => item.parameter === this.parameter)
			
			if(!this.inputValue.trim()){				
				return arr1;	
			} 
						
			/*Поиск по любому параметру*/
			let arr2 = this.products.slice();
			arr2 = arr2.filter(item => (item.type.toLowerCase().indexOf(this.inputValue.toLowerCase()) + 1) || (item.category.toLowerCase().indexOf(this.inputValue.toLowerCase()) + 1) || (item.color.toLowerCase().indexOf(this.inputValue.toLowerCase()) + 1) || (item.parameter.toLowerCase().indexOf(this.inputValue.toLowerCase()) + 1));
			return arr2
		}		
	}
})