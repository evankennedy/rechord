<template>
	<div>
		<ul v-if="clips.length">
			<li v-for="clip in clips">
				{{ clip.name }}:
				{{ clip.buffer.duration }}s,
				{{ clip.buffer.sampleRate }} Hz,
				{{ clip.buffer.numberOfChannels }} channel{{ clip.buffer.numberOfChannels != 1 ? 's' : '' }}
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
