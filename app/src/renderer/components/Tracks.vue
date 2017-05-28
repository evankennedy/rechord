<template>
	<div>
		<div class="track" v-for="track in tracks" :style="{ height: `${settings.trackHeight}px` }">
			<div
				class="segment"
				v-for="segment in track.segments"
				@mousedown.prevent="mousedown(segment, $event)"
				:style="{ left: `${segment.left * settings.pps}px` }"
			>
				<segment :segment="segment"></segment>
			</div>
		</div>
	</div>
</template>

<script>
	import settings from 'renderer/state/settings'
	import tracks from 'renderer/state/tracks'
	import Segment from './segment'

	export default {
		data() {
			return {
				tracks,
				settings
			}
		},
		methods: {
			mousedown(segment, event) {
				console.log(segment, event)
				let initialLeft = segment.left
				let offsetLeft = event.offsetLeft

				let move = event => {
					segment.left = segment.left || 0
					segment.left += event.movementX / settings.pps
				}
				let up = event => {
					event.target.removeEventListener('mousemove', move)
					event.target.removeEventListener('mouseup', up)
				}
				event.target.addEventListener('mousemove', move)
				event.target.addEventListener('mouseup', up)
			}
		},
		components: {
			Segment
		}
	}
</script>

<style scoped>
	.track {
		position: relative;
		white-space: nowrap;
		box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
	}
	.segment {
		position: absolute;
		background: #eee;
		box-shadow: inset 0 0 2px 0 rgba(0,0,0,0.5);
	}
	.segment:hover {
		z-index: 1;
		box-shadow: inset 0 0 0 2px rgba(0,0,150,0.5);
	}
</style>
