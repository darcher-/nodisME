import Mock, { RECORD, REG_EXP } from "./mocks"

class Convert {
	getColorByType(type, name) {
		return RECORD[type][name]?.match(REG_EXP[type])[0]
	}
}

const Converter = new Convert()
export default Converter
