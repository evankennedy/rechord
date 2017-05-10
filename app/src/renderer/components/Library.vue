<template>
	<div>
		<ul v-if="clips.length">
			<li v-for="clip in clips">
				<clip :clip="clip"></clip>
			</li>
		</ul>
	</div>
</template>

<script>
	import library from 'renderer/state/library'
	import Clip from './Clip'

	export default {
		data() {
			return {
				clips: library.clips
			}
		},
		components: {
			Clip
		}
	}
</script>

<style scoped>
</style>
