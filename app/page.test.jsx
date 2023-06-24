import Page from "./page"
import { render, screen } from "@testing-library/react"
import {
	afterEach,
	beforeEach,
	describe,
	expect,
	jest,
	test,
} from "@jest/globals"

afterEach(() => {
	jest.clearAllMocks()
})

beforeEach(() => {
	jest.resetAllMocks()
})

describe("Page", () => {
	test("Page initializes", () => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: true,
				addEventListener: jest.fn(),
			})),
		})
		render(<Page />)
		expect(screen.getByText(/docs/i)).toBeInTheDocument()
	})
})
