<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
	to: string
}>()

const tagName = computed(() =>
	props.to.startsWith('http') ? 'a' : 'RouterLink'
)

const attrName = computed(() => (tagName.value === 'a' ? 'href' : 'to'))

const isExternal = computed(() =>
	props.to.startsWith('http') ? '_blank' : undefined
)
</script>

<template>
	<component
		class="navigation-item"
		:is="tagName"
		:[attrName]="props.to"
		:target="isExternal">
		<slot />
	</component>
</template>

<style scoped></style>
