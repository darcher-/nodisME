class SchemeMode {
	getStoredSchemeModeSettings() {
		const src = localStorage.getItem("user-scheme-mode")
		return !src ? "light" : src
	}

	getSystemSchemeModeSettings() {
		return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	}

	getSchemeModePreference() {
		return (
			this.getStoredSchemeModeSettings() || this.getSystemSchemeModeSettings()
		)
	}

	storeSchemeModePreference(src = "light") {
		return localStorage.setItem("user-scheme-mode", src)
	}

	applySchemeModePreference(src = "light", target = document.body) {
		// TODO: cerate cateorization by directory or css variable naming to update SchemeMode references dynamically from shadow DOM instead of binding attributes to DOM.
		return target?.setAttribute("data-scheme", src)
	}

	setSchemeModePreference(src = "light") {
		this.storeSchemeModePreference(src)
		this.applySchemeModePreference(src)
	}

	getSchemeModeChanges() {
		globalThis
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", function (e) {
				this.setSchemeModePreference(e.matches ? "dark" : "light")
			})
		return this.getStoredSchemeModeSettings()
	}
}

export const SchemeModes = new SchemeMode()
export default SchemeModes
