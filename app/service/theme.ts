class Theme {
  getThemePreferenceFromStorage() {
    const src = localStorage.getItem("user-preferred-theme");
    return src === null ? "light" : src;
  }

  setThemePreferenceToStorage(src: "light" | "dark") {
    return localStorage.setItem("user-preferred-theme", src);
  }

  getThemePreferenceFromSystem() {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  setThemeInBrowser(src: "light" | "dark") {
    // TODO: cerate cateorization by directory or css variable naming to update theme references dynamically from shadow DOM instead of binding attributes to DOM.
    return document.querySelector("#root").setAttribute("data-theme", src);
  }

  getThemePreferenceUpdates() {
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        const colorScheme = e.matches ? "dark" : "light";
        setThemePreferenceToStorage(colorScheme === "dark" ? "dark" : "light");
      });
  }
}

export const Theme = new Theme();
export default Theme;
