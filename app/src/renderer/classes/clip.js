import context from 'renderer/state/context'

export default class Clip {
	constructor() {
		this.buffer = null
		this.name   = undefined
		this.loaded = false
	}

	drawTo(canvas) {
		console.log('drawing')
		var context = canvas.getContext("2d");

		var leftChannel = this.buffer.getChannelData(0)
		var lineOpacity = canvas.width / leftChannel.length
		context.save()
		context.clearRect(0, 0, canvas.width, canvas.height)
		context.strokeStyle = '#333'
		context.transform(1, 0, 0, 1, 0, canvas.height / 2)
		context.beginPath()
		context.moveTo(0 , 0)
		for (var i=0; i<leftChannel.length; i++) {
			context.lineTo(canvas.width * i / leftChannel.length, leftChannel[i] * canvas.height / 2)
		}
		context.lineTo( canvas.width  , 0)
		context.stroke()
		context.restore()
	}

	load(file) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader()
			this.loaded = false
			this.name = file.name

			reader.onloadend = data => {
				this.loaded = true
				context.decodeAudioData(data.target.result, buffer => {
					this.buffer = buffer
					resolve(this)
				})
			}
			reader.readAsArrayBuffer(file)

			reader.onabort = () => reject('File read aborted')
			reader.onerror = () => reject('File read error')
		})
	}
}
