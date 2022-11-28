<template>
	<div class="question-problem">
		<slot />
	</div>
</template>

<style scoped>
.question-problem {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 9em;

	height: 45%;

	/* align-content: center; */
}
</style>
