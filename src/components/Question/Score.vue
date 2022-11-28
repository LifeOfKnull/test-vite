<template>
	<div class="question-score">
		<slot />
	</div>
</template>

<style scoped>
.question-score {
	display: flex;
	height: 2rem;

	/* border: 1px solid red; */
	/* color: brown; */
	position: static;
	align-self: flex-start;

	padding: 2em;
	top: 2%;
	left: 2%;
	font-size: 1.5em;
}
</style>
