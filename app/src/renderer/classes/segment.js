import settings from 'renderer/state/settings'

export default class Segment {
	constructor() {
		this.lTrim = 0
		this.rTrim = 0
		this.data = null
		this._left = 0
	}

	set left(left) {
		this._left = Math.min(Math.max(0, left), settings.duration - this.data.buffer.duration)
	}

	get left() {
		return this._left
	}
}
