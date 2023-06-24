import Util from "./"
import Colors from "./convert"
import Mocks from "./mocks"
import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	jest,
	test,
} from "@jest/globals"

afterEach(() => {
	jest.clearAllMocks()
})

beforeEach(() => {
	jest.resetAllMocks()
})

describe("Convert", () => {
	describe("getColorByType", () => {
		test("hex lowercase", () => {
			expect(Colors.getColorByType("Hexa", "crimson")).toMatch("#dc143c")
		})
	})
})
