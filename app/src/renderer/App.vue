<template>
	<div @drop.stop.prevent="addFiles($event.dataTransfer.files)" @dragover.stop.prevent id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import library from 'renderer/state/library'
	import Clip from 'renderer/classes/clip'

	export default {
		methods: {
			addFiles(file) {
				if (file instanceof Array || file instanceof FileList) {
					return [].forEach.call(file, this.addFiles)
				}

				new Clip()
					.load(file)
					.then(clip => library.clips.push(clip))
					.catch(console.error)
			}
		},
		library
	}
</script>

<style>
	@import url(https://fonts.googleapis.com/css?family=Lato:300);

	* {
		margin: 0;
		padding: 0;
	}

	#app,
	html,
	body {
		width: 100%;
		height: 100%;
	}

	body {
		align-items: center;
		background:
			radial-gradient(
				ellipse at center,
				rgba(255, 255, 255, 1) 0%,
				rgba(229, 229, 229, .85) 100%
			);
		background-position: center;
		display: flex;
		font-family: Lato, Helvetica, sans-serif;
		justify-content: center;
		text-align: center;
	}
</style>
