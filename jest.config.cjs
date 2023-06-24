const nextJest = require("next/jest")

module.exports = async () => {
	const jestConfig = await nextJest({ dir: "./" })
	const createJestConfig = await jestConfig({
		collectCoverage: true,
		coverageProvider: "v8",
		coverageReporters: ["json", "lcov", "text", "clover"],
		collectCoverageFrom: ["<rootDir>/(app|ui|util)/*.{js,jsx}"],
		moduleDirectories: ["node_modules", "<rootDir>"],
		// modulePaths: ["<rootDir>"],
		// roots: ["<rootDir>"],
		setupFilesAfterEnv: ["<rootDir>/lib/config/jest.setup.js"],
		testEnvironment: "jest-environment-jsdom",
		testMatch: ["!<rootDir>/**/*", "<rootDir>/**/*.test.{js,jsx}"],
		verbose: true,
	})()

	return {
		...createJestConfig,
		moduleNameMapper: {
			...createJestConfig.moduleNameMapper,
			"^@NoM/(.*)$": "<rootDir>/$1",
		},
	}
}
