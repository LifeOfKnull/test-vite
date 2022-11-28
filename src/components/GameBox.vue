<template>
	<div class="question-box">
		<QuestionMain>
			<QuestionBox></QuestionBox>
		</QuestionMain>

		<AnswerList>
			<AnswerOption></AnswerOption>
		</AnswerList>
	</div>
</template>

<style scoped>
.question-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 80%;
	width: 60%;

	background-color: #561050;
	/* #78290f */
	border-radius: 23px;
	box-shadow: 2px 5px 5px #7f669d;
	font-family: 'Gloria Hallelujah', cursive;
}
</style>
