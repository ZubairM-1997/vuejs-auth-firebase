<template>
	<div>
		<div v-if= "error" class="error">{{error}}</div>
		<form @submit.prevent = "submit">

			<div class="email">
				<input type="email" v-model= "form.email" placeholder="email"/>
			</div>

			<div class="password">
				<input type="password" v-model= "form.password" placeholder="password"/>
			</div>

			<button>Submit</button>

			<span>
				Need to make a new account? Click here to <router-link to="/register">register</router-link>
			</span>

		</form>


	</div>
</template>

<script>
import firebase from "firebase"
	export default {
		data() {
			return {
				form: {
					email: "",
					password: ""
				},
				error: null
			}
		},
		methods: {
			async submit() {
				try {
					const user = await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
					console.log(user)
					this.$router.replace({name: "Dashboard"})


				} catch(error) {
					this.error = error

				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	.error{
		color: red;
		font-size: 18px;
	}

	input {
		width: 400px;
		padding: 30px;
		margin: 20px;
		font-size: 21px
	}

	button {
		background-color: #4CAF50; /* Green */
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

		span {
		margin: 20px;
	}

</style>