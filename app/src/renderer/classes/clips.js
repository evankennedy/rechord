export default class Clips {
	forEach(fn) {
		Object.keys(this.clips)
			.sort((a, b) => a - b)
			.forEach(fn)
	}
}
