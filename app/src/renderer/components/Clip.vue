<template>
	<div>
		<canvas v-waveform="clip" :width="clip.buffer.duration * settings.pps" :height="settings.trackHeight"></canvas>
	</div>
</template>

<script>
	import settings from 'renderer/state/settings'

	export default {
		data() {
			return {
				settings
			}
		},
		props: [
			'clip',
			'zoom',
			'height'
		],
	    directives: {
	        waveform(canvas, binding) {
				binding.value.drawTo(canvas)
	        },
			drawitgood(canvas, binding) {
				binding.value.waveform(canvas)
			}
	    }
	}
</script>

<style scoped>
	canvas {
		vertical-align: middle;
	}
</style>
