<template>
	<div class="question-prompt">
		<slot />
	</div>
</template>

<style scoped>
.question-prompt {
	color: rgb(0, 0, 0);
	display: flex;

	/* margin-bottom: 1%; */
	/* align-items: center; */
	border: 0.2em solid #ff7d00;
	font-size: 1.5em;

	padding: 0.2em;
	border-radius: 23px;
	position: relative;
	top: auto;
	margin-bottom: 1%;
	align-self: center;
}
</style>
