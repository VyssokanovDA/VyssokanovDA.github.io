<template>
	<div class="todoapp" id="app">
	    <header class="header">
	        <h1>todos</h1>
	        <p class="error" v-show="error">{{error}}</p>
	        <input class="new-todo"
	               autofocus autocomplete="off"
	               placeholder="What needs to be done?"
	               v-model="inputValue"
	               @keyup.enter="addTodo"
	        >
	    </header>
	    <section class="main">
	        <input class="toggle-all" type="checkbox" v-model='input'>
	        <ul class="todo-list">
	            <li class="todo" 
	                v-for="todo in getAllTodos" 
	                v-bind:class="isCompleted(todo.status)"
	            >
	                <div class="view">
	                    <input 
	                        class="toggle" 
	                        type="checkbox" 
	                        v-model="todo.status"
	                    >
	                    <label>{{todo.value}}</label>
	                    <button @click="deleteTodo(todo.id)" class="destroy"></button>
	                </div>
	                <input class="edit" type="text">
	            </li>
	        </ul>
	    </section>
	    <footer class="footer">
	    <span class="todo-count">
	      <strong>remaining</strong>
	    </span>
	        <ul class="filters">
	            <li><a 
	                    :class="{selected: !type}"
	                    href="javascript:void(0)"
	                    @click="setFilter()"
	                 >All</a></li>
	            <li><a 
	                    :class="{selected: type === 'active'}"
	                    href="javascript:void(0)"
	                    @click="setFilter('active')" 
	                >
	            Active</a></li>
	            <li><a :class="{selected: type === 'completed'}" 
	                href="javascript:void(0)" @click="setFilter('completed')"
	            >Completed</a></li>
	        </ul>
	        <button class="clear-completed">
	            Clear completed
	        </button>
	    </footer>
	</div>
</template>

<script>
export default {
	name: 'main-vue',
	data(){
		return {
			inputValue: '',
			todos: [],
			id: 0,
			error: '',
			type: '',
			input: false
		}
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
				this.todos.findIndex(item => item.id === id), 1)
		},
		isCompleted(status){
			return {
				'completed': status
			}
		},
		setFilter(filterType){
			this.type = filterType;
		},
		checkAll(){
			this.todos.forEach(function(item, index, arr){
				item.status = !item.status;
			});
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
			return this.todos
		}
	},
	watch:{
		input(val){
			if(val) this.todos.forEach(item => item.status = true)
			else this.todos.forEach(item => item.status = false)
		}
	}
}
</script>

<style>
	

</style>
