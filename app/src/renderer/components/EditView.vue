<template>
	<div class="all">

		<div class="main">
			<div class="tracks">
				<button @click="addTrack()">
					Add track
				</button>
				<div :style="{ width: `${settings.duration * settings.pps }px` }">
					<tracks></tracks>
				</div>
			</div>
			<div class="library">
				Library
				<library></library>
			</div>
		</div>

		<div class="status">
			 {{ settings.zoom }}%
			 <input type="range" min="0" max="500" v-model="settings.zoom">
		</div>

	</div>
</template>

<script>
	import settings from 'renderer/state/settings'
	import tracks from 'renderer/state/tracks'
	import Tracks from './Tracks'
	import Library from './Library'
	import Track from 'renderer/classes/track'

	export default {
		data() {
			return {
				settings,
				tracks
			}
		},
		methods: {
			addTrack() {
				console.log('adding mother?', new Track())
				tracks.push(new Track())
			}
		},
		components: {
			Tracks,
			Library
		},
		name: 'edit-view'
	}
</script>

<style scoped>
	.all {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.main {
		flex: 1;
		display: flex;
		width: 100%;
	}

	.tracks {
		flex: 1;
		overflow: auto;
	}

	.library {
		min-width: 20em;
	}

	.status {

	}
</style>
