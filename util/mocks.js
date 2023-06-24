export const COLORS = {
	Hexa: ["#ffd7008a", "#EEE8AA", "#dc143c", "#507e", "#F55D", "#900"],
	Name: ["PaleGoldenrod", "Crimson", "DarkRed", "Indigo", "Tomato", "Gold"],
	Hsla: [
		"hsl(318, 0.725, 0.22, 66.667%)",
		"hsla(11, 80%, 0.60, 50.2%)",
		"hsla(46, 100%, 50%, 0.5)",
		"hsl(81, 33.125%, 0.81)",
		"hsl(343, 100%, 39%)",
		"hsla(11, 80%, 60%)",
	],
	Rgba: [
		"rgba(100%, 34%, 20%, 72.5%)",
		"rgba(85.4%, 96.8%, 65.125%)",
		"rgba(255, 195, 0, 0.8125)",
		"rgb(88 24 69 / 0.825)",
		"rgb(255, 99, 71)",
		"rgb(199 0 57)",
	],
}

export const REG_EXP = {
	Hexa: /^#([a-f\d]{2,4}){1,2}$/i,
	Name: /^(crimson|darkred|gold|indigo|palegoldenrod|tomato)$/i,
	Hsla: /^hsla?\(([\d.%,\s]{0,360})+([\d.%,\s]+){2,3}\)/,
	Rgba: /^rgba?\(([\d.%,\s]+){3}(?:[/\s\d.%]*)?\)$/,
}

export const RECORD = {
	Hexa: {
		crimson: "#dc143c",
		darkred: "#900",
		gold: "#ffd7008a",
		indigo: "#507e",
		palegoldenrod: "#EEE8AA",
		tomato: "#F55D",
	},
	Name: {
		crimson: "Crimson",
		darkred: "DarkRed",
		gold: "Gold",
		indigo: "Indigo",
		palegoldenrod: "PaleGoldenrod",
		tomato: "Tomato",
	},
	Hsla: {
		crimson: "hsl(343, 100%, 39%)",
		darkred: "hsla(11, 80%, 60%)",
		gold: "hsla(46, 100%, 50%, 0.5)",
		indigo: "hsl(318, 0.725, 0.22, 66.666%)",
		palegoldenrod: "hsl(81, 33.125%, 0.81)",
		tomato: "hsla(11, 80%, 0.60, 50.2%)",
	},
	Rgba: {
		crimson: "rgb(199 0 57)",
		darkred: "rgba(100%, 34%, 20%, 72.52313%)",
		gold: "rgba(255, 195, 0, 0.8125234)",
		indigo: "rgb(88 24 69 / 0.825)",
		palegoldenrod: "rgba(85.4%, 96.8%, 65.125%)",
		tomato: "rgb(255, 99, 71)",
	},
}

export const Mocks = { COLORS, RECORD, REG_EXP }
export default Mocks
