<template>
	<div>
		<div class="segment">
			<div class="info b r">{{ segment.data.buffer.duration | time }}</div>
			<div class="info t l">{{ segment.data.name }}</div>
			<clip :clip="segment.data"></clip>
		</div>
	</div>
</template>

<script>
	import settings from 'renderer/state/settings'
	import Clip from './Clip'

	export default {
		data() {
			return {
				settings
			}
		},
		props: [
			'segment'
		],
		filters: {
			time(seconds) {
				if (!seconds) return '0:00'
				if (seconds < 10) {
					return `0:0${seconds}`
				} else if (seconds < 60) {
					return `0:${seconds}`
				} else {
					let minutes = (seconds | 0) / 60 | 0
					return `${minutes}:${seconds - minutes * 60}`
				}
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		},
		components: {
			Clip
		}
	}
</script>

<style scoped>
.t { top: 0 }
.l { left: 0 }
.r { right: 0 }
.b { bottom: 0 }

.segment {
	position: relative;
	display: inline-block;
}
.info {
	position: absolute;
	color: white;
	background: rgba(0,0,0,0.7);
	font-size: 0.6em;
	padding: 0.2em;
	text-transform: uppercase;
}
</style>
