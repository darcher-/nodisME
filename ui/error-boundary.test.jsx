import { ReactElement } from "react"
import ErrorBoundary from "./error-boundary"
import { render } from "@testing-library/react"

const renderProviders = (ui) => render(ui, {})

const Sample = () => {
	throw new Error()
}

describe("Error Boundary", () => {
	it("errors on render and renders error boundary", () => {
		const { getByText } = renderProviders(
			<ErrorBoundary>
				<Sample />
			</ErrorBoundary>
		)
		const errorMessage = getByText("Make like a tree⁉")
		expect(errorMessage).toBeDefined()
	})
})
