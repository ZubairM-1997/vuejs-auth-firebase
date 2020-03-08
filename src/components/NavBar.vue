<template>
<nav>
	<div>
		<ul>
			<template v-if= "user.loggedIn !== false">
				<div>{{user.data.displayName}}</div>
				<button class = "nav-link" @click.prevent= "signOut">Sign Out</button>
			</template>

			<template v-else>
				<li>
					<router-link to="/login">Login</router-link> |
				</li>
				<li>
					<router-link to="/register">Register</router-link>
				</li>


			</template>

		</ul>
	</div>



</nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>