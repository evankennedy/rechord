export default new class Settings {
	constructor() {
		this.pps = 10
		this.trackHeight = 100
		this.duration = 120
	}

	get zoom() {
		return this.pps * 5 | 0
	}

	set zoom(value) {
		this.pps = value / 5
	}
}
