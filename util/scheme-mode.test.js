import Util from "./"
import Mode from "./scheme-mode"
import Mocks from "./mocks"
import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	jest,
	test,
} from "@jest/globals"

jest.mock("./scheme-mode", () => ({
	Mode: {
		getStoredSchemeModeSettings: jest.fn(),
		getSystemSchemeModeSettings: jest.fn(),
		getSchemeModePreference: jest.fn(),
		storeSchemeModePreference: jest.fn(),
		applySchemeModePreference: jest.fn(),
		setSchemeModePreference: jest.fn().mockImplementation((e) => {
			return {
				storeSchemeModePreference: jest.fn(e),
				applySchemeModePreference: jest.fn(e),
			}
		}),
		getSchemeModeChanges: jest.fn(),
	},
}))

afterEach(() => {
	localStorage.removeItem("user-scheme-mode")
	jest.clearAllMocks()
})

beforeEach(() => {
	jest.resetAllMocks()
})

describe("Mode", () => {
	describe("getStoredSchemeModeSettings", () => {
		test("light", () => {
			expect(Mode.getStoredSchemeModeSettings()).toMatch(/light/)
		})
		test("dark", () => {
			localStorage.setItem("user-scheme-mode", "dark")
			expect(Mode.getStoredSchemeModeSettings()).toMatch(/dark/)
		})
	})

	describe("getSystemSchemeModeSettings", () => {
		test("dark", () => {
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: true,
				})),
			})
			localStorage.setItem("user-scheme-mode", "dark")
			const mode = Mode.getSystemSchemeModeSettings()

			expect(localStorage.getItem("user-scheme-mode")).toMatch(/dark/)
			expect(mode).toMatch(/dark/)
		})

		test("light", () => {
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false,
				})),
			})
			localStorage.setItem("user-scheme-mode", "light")
			const mode = Mode.getSystemSchemeModeSettings()

			expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
			expect(mode).toMatch(/light/)
		})

		test("null - light", () => {
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false,
				})),
			})
			localStorage.removeItem("user-scheme-mode")
			const mode = Mode.getSystemSchemeModeSettings()

			expect(localStorage.getItem("user-scheme-mode")).toBeNull()
			expect(mode).toMatch(/light/)
		})
	})

	describe("getSchemeModePreference", () => {
		test("light", () => {
			expect(Mode.getSchemeModePreference()).toMatch(/light/)
		})
		test("dark", () => {
			localStorage.setItem("user-scheme-mode", "dark")
			expect(Mode.getSchemeModePreference()).toMatch(/dark/)
		})
	})

	describe("storeSchemeModePreference", () => {
		test("light", () => {
			Mode.storeSchemeModePreference("light")
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
		})
		test("dark", () => {
			Mode.storeSchemeModePreference("darkt")
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/dark/)
		})
	})

	describe("applySchemeModePreference", () => {
		document.body.innerHTML = `<div id="root">test</div>`
		test("defaults", () => {
			Mode.applySchemeModePreference()
			expect(document.body.dataset.scheme).toMatch(/light/)
		})
		test("light; no target", () => {
			Mode.applySchemeModePreference("light")
			expect(document.body.dataset.scheme).toMatch(/light/)
		})
		test("light; target as body", () => {
			Mode.applySchemeModePreference("light", document.body)
			expect(document.body.dataset.scheme).toMatch(/light/)
		})
		test("dark; not target", () => {
			Mode.applySchemeModePreference("dark")
			expect(document.body.dataset.scheme).toMatch(/dark/)
		})
		test("dark; target as body", () => {
			Mode.applySchemeModePreference("dark", document.body)
			expect(document.body.dataset.scheme).toMatch(/dark/)
		})
	})

	describe("setSchemeModePreference", () => {
		document.body.innerHTML = `<div id="root">test</div>`
		describe("defaults", () => {
			test("node", () => {
				Mode.setSchemeModePreference()
				expect(document.body.dataset.scheme).toMatch(/light/)
			})
			test("store", () => {
				Mode.setSchemeModePreference()
				expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
			})
		})
		describe("light", () => {
			test("node", () => {
				Mode.setSchemeModePreference("light")
				expect(document.body.dataset.scheme).toMatch(/light/)
			})
			test("store", () => {
				Mode.setSchemeModePreference("light")
				expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
			})
		})
		describe("dark", () => {
			test("node", () => {
				Mode.setSchemeModePreference("dark")
				expect(document.body.dataset.scheme).toMatch(/dark/)
			})
			test("store", () => {
				Mode.setSchemeModePreference("dark")
				expect(localStorage.getItem("user-scheme-mode")).toMatch(/dark/)
			})
		})
	})

	describe("getSchemeModeChanges", () => {
		test("no match - dark to light", () => {
			localStorage.setItem("user-scheme-mode", "light")
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false,
					addEventListener: jest.fn(),
				})),
			})
			document.body.innerHTML = `<div id="root">test</div>`
			const updated = Mode.getSchemeModeChanges()
			Mode.setSchemeModePreference(
				{
					light: "dark",
					dark: "light",
				}[localStorage.getItem("user-scheme-mode")]
			)
			expect(updated).toMatch(/light/)
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/dark/)
			expect(document.body.dataset.scheme).toMatch(/dark/)

			// TODO: these are being called, mock a spy to track/test
			// expect(Mode.setSchemeModePreference).toHaveBeenCalled()
			// expect(Mode.storeSchemeModePreference).toBeCalled()
			// expect(Mode.applySchemeModePreference).toBeCalled()
		})

		test("no match - light to dark", () => {
			localStorage.setItem("user-scheme-mode", "dark")
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false,
					addEventListener: jest.fn(),
				})),
			})
			document.body.innerHTML = `<div id="root">test</div>`
			const updated = Mode.getSchemeModeChanges()
			Mode.setSchemeModePreference(
				{
					light: "dark",
					dark: "light",
				}[localStorage.getItem("user-scheme-mode")]
			)
			expect(updated).toMatch(/dark/)
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
			expect(document.body.dataset.scheme).toMatch(/light/)
		})

		test("match - dark to light", () => {
			localStorage.setItem("user-scheme-mode", "light")
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: true,
					addEventListener: jest.fn(),
				})),
			})
			document.body.innerHTML = `<div id="root">test</div>`
			const updated = Mode.getSchemeModeChanges()
			Mode.setSchemeModePreference(
				{
					light: "dark",
					dark: "light",
				}[localStorage.getItem("user-scheme-mode")]
			)
			expect(updated).toMatch(/light/)
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/dark/)
			expect(document.body.dataset.scheme).toBe("dark")
		})

		test("match - light to dark", () => {
			localStorage.setItem("user-scheme-mode", "dark")
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: true,
					addEventListener: jest.fn(),
				})),
			})
			document.body.innerHTML = `<div id="root">test</div>`
			const updated = Mode.getSchemeModeChanges()
			Mode.setSchemeModePreference(
				{
					light: "dark",
					dark: "light",
				}[localStorage.getItem("user-scheme-mode")]
			)
			expect(updated).toMatch(/dark/)
			expect(localStorage.getItem("user-scheme-mode")).toMatch(/light/)
			expect(document.body.dataset.scheme).toBe("light")
		})
	})
})
