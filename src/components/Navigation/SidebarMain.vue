<script setup lang="ts">
import Addition from '../../pages/addition.vue'
import Division from '../../pages/division.vue'
import Index from '../../pages/index.vue'
import Multiplication from '../../pages/multiplication.vue'
import Subtraction from '../../pages/subtraction.vue'

const test = 'https://google.com'
</script>

<template>
	<nav>
		<NavigationItem to="/">Home</NavigationItem>
		<NavigationItem to="/addition">+</NavigationItem>
		<NavigationItem to="/subtraction">-</NavigationItem>
		<NavigationItem to="/multiplication">x</NavigationItem>
		<NavigationItem to="/division">&divide;</NavigationItem>
	</nav>
</template>

<style scoped lang="scss">
nav {
	display: flex;
	flex-direction: column;
	// flex: 1;
	height: 100%;
	width: auto;
	left: 0;
	padding: 1rem;
	background: linear-gradient(#001524, #012c4b);

	border-radius: 0.25em;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	right: auto;
}

.navigation-item {
	text-decoration: none;
	color: white;
	/* width: 60%; */
	padding: 0.5em;
	font-size: 2em;
	border: 0.1em solid #ff7d00;
	border-radius: 1em;
	box-shadow: 0.1em 0.1em 0.1em rgba($color: #ff7d00, $alpha: 0.3);
	font-family: 'Gloria Hallelujah', cursive;
	transition: all 250ms;

	&:hover {
		box-shadow: 0.1em 0.1em 0.5em 0 rgba($color: #ff7d00, $alpha: 0.5);
	}
	&:active {
		box-shadow: none;
		transform: translate(0.1em, 0.1em);
	}
}
</style>
