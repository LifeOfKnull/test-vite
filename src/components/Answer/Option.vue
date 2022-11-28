<template>
	<div class="answer-options">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.answer-options {
	display: flex;
	border: 1px solid red;
	height: 80%;
	width: 20%;
	background-color: #011a2c;
	border-radius: 23px;
	color: #ff7d00;
	justify-content: center;
	align-items: center;
	box-shadow: 4px 4px 4px #ba94d1;
	transition: all 250ms;
	&:hover {
		box-shadow: 0.1em 0.1em 0.5em 0 rgba($color: #ff7d00, $alpha: 0.5);
		cursor: pointer;
	}
	&:active {
		box-shadow: none;
		transform: translate(0em, 0.1em);
	}
}
</style>
