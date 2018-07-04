<template>
	<div class='login'>
		<input placeholder="login" v-model="login"/>
		<input placeholder="password" v-model="password"/>
		<button v-on:click="submit">login</button>
		<h1 v-if="status = 'error'">{{message}}</h1>
	</div>
</template>
<script>
	import axios from '../services/axios';
	export default {
		name: 'login-vue',
		data(){
			return{
				login: '',
				password: '',
				status: '',
				message: ''

			}
		},
		methods: {
			async submit(){
				try{
					const data = {
						email: this.login,
						password: this.password
					}
					const result = await axios().post('/login', data);
					console.log(result);
					this.status = result.data.status;
					this.message = result.data.message
				}catch(err){
					console.log(err);
				}
				
				

			}
		}
	}
</script>

<style>
	.login{
		text-align: center

	}
</style>


