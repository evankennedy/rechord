<template>
	<div>
		<ul v-if="clips.length">
			<li v-for="clip in clips">
				{{ clip.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	import library from 'renderer/state/library'

	export default {
		data() {
			return {
				clips: library.clips
			}
		}
	}
</script>

<style scoped>
</style>
