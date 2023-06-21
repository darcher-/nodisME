/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/app/**/test.{ts,tsx}", "<rootDir>/app/**/*.test.{ts,tsx}"],
};
