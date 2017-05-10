<template>
	<div>
		{{ clip.name }}:
		{{ clip.buffer.duration }}s,
		{{ clip.buffer.sampleRate }} Hz,
		{{ clip.buffer.numberOfChannels }} channel{{ clip.buffer.numberOfChannels != 1 ? 's' : '' }}
		<input type="range" min="0" max="10" v-model="modifier">
		<div>
			<canvas style="border:1px solid #ddd;" v-waveform="clip" :width="clip.buffer.duration*modifier"></canvas>
		</div>
	</div>
</template>

<script>
	import library from 'renderer/state/library'
	import Clip from './Clip'

	export default {
		props: [
			'clip'
		],
		data() {
			return {
				modifier: 1
			}
		},
	    directives: {
	        waveform(canvas, binding) {
				binding.value.drawTo(canvas)
	        }
	    }
	}
</script>

<style scoped>
</style>
