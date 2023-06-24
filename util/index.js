class Util {
	parseFloat(source) {
		return parseFloat(source)
	}

	parseInt(source, radix) {
		return parseInt(source, radix || 10)
	}

	parseNum(source, handler = "round") {
		const integer = Number(source)
		const rounded = Math[handler](integer)
		return rounded
	}

	setDigits(source, digits) {
		const intLikeStr = Number(source).toPrecision(digits || 4)
		const float64bit = this.parseFloat(intLikeStr)
		return float64bit
	}

	setDecimalPlace(source, configOptions) {
		const int = this.setDigits(source)
		const out = int.toLocaleString("default", { ...configOptions })
		return Number(out)
	}
}

const Helpers = new Util()
export default Helpers
