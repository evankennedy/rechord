<template>
	<div>
		<div v-for="clip in clips" @click="addClip(clip)">
			{{ clip.name }}
		</div>
	</div>
</template>

<script>
	import Segment from 'renderer/classes/segment'
	import settings from 'renderer/state/settings'
	import library from 'renderer/state/library'
	import tracks from 'renderer/state/tracks'
	import Clip from './Clip'

	export default {
		data() {
			return {
				clips: library.clips,
				settings
			}
		},
		methods: {
			addClip(clip) {
				let segment = new Segment()
				segment.data = clip
				tracks[0].segments.push(segment)
			}
		},
		components: {
			Clip
		}
	}
</script>

<style scoped>
</style>
