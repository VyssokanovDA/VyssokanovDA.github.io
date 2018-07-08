new Vue({
	el: '#app',
	data: {
		inputValue: 0,
		message: ''
	},
	methods: {		
		start: function(){			
			if (!(this.inputValue == 0)){
				this.inputValue	= this.inputValue - 1;			
				setTimeout(this.start, 1)			
			}else{
				this.message = 'Таймер окончил свою работу'

			}
		}
	}	
})