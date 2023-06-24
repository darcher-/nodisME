import Image from "next/image"
import { Component } from "react"

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}
	static getDerivedStateFromError(errorInfo) {
		return {
			errorInfo,
			hasError: true,
		}
	}
	componentDidCatch(error, errorInfo) {
		// TODO: include logging service
		console.error({ error, errorInfo })
	}
	render() {
		if (this.state.hasError) {
			// TODO: improve fallback ui
			return (
				<div>
					<h2>
						<strong>Uh Oh‼</strong>
						<p>We&apos;re not saying something&apos;s wrong&hellip;</p>
						<p>
							Buuut&mdash;we&apos;re gonna need you to help us <em>both</em> get
							out of this mess before there really is a problem&hellip;Quick!
							use the button below to escape!
						</p>
					</h2>
					<button
						id="btn-escape"
						className="btn btn-primary"
						title="⟳ Try again"
						type="button"
						onClick={() => {
							return this.setState({ hasError: false })
						}}
					>
						<Image
							alt="&hellip;and LEAF‼"
							className="icon"
							height={24}
							src="static/img/leaf.svg"
							width={24}
						/>
						<label htmlFor="btn-escape">Make like a tree⁉</label>
					</button>
				</div>
			)
		}
		return this.props.children
	}
}

export default ErrorBoundary
