new Vue({
	el: '#app',
	data: {
		inputValue: '',
		todos: [],
		id: 0,
		error: '',
		type: '',
		input: false
	},
	methods: {
		addTodo(){
			if(!this.inputValue.trim()){
				this.error = 'Введите корректное название задачи'
				return;	
			} 
			this.error = '';
			this.todos.push({
				id: this.id,
				value: this.inputValue,
				status: false
			})
			this.id = this.id + 1;

			this.inputValue = '';
		},
		deleteTodo(id){
			this.todos.splice(
				this.todos.findIndex(item => item.id === id), 1);
		},
		isCompleted(status){
			return {
				'completed': status
			}
		},
		setFilter(filterType){
			this.type = filterType;
		},		
		clearCompleted(){			
			this.todos = this.todos.filter(item => item.status === false);
		}
	},
	computed: {
		getAllTodos(){
			if(this.type === 'completed'){
				return this.todos.slice().filter(item => item.status === true)
			}
			if(this.type === 'active'){
				return this.todos.slice().filter(item => item.status === false)
			}
			return this.todos;
		},
		count: function(){
			return this.todos.filter(item => item.status === false).length
		}
	},
	watch:{
		input(val){
			if(val) this.todos.forEach(item => item.status = true)
			else this.todos.forEach(item => item.status = false)

		}
	}
})