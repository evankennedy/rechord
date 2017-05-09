export default class Clip {
	constructor() {
		this.buffer = null
		this.name   = undefined
		this.loaded = false
	}

	load(file) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader()
			this.loaded = false
			this.name = file.name

			reader.onloadend = data => {
				this.loaded = true
				this.buffer = data.target.result
				resolve(this)
			}
			reader.readAsArrayBuffer(file)

			reader.onabort = () => reject('File read aborted')
			reader.onerror = () => reject('File read error')
		})
	}
}
