new Vue({
	el: '#app',
	data: {
		inputValue: '',
		todos: []
	},
	methods: {
		addTodo(){
			this.todos.push({
				id: this.todos.length,
				value: this.inputValue,
				status: false
			})

			this.inputValue = '';
		},
		deleteTodo(todoid){
			this.todos.forEach(function(item, index, arr){
				if (item.id == todoid){arr.splice(index, 1)}
			})
		}
	}
})