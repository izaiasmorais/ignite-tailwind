import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: "minmax(18rem, 20rem) 1fr",
				form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
			},
			borderWidth: {
				6: "6px",
			},
			colors: {
				violet: {
					25: "#f6faff",
				},
			},
			keyframes: {
				slideDownAndFade: {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				// slideUpAndFade: {
				// 	from: { opacity: "1" },
				// 	to: { opacity: "0" },
				// },
			},
			animation: {
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bazier(0.16, 1, 0.3, 1)",
				// slideUpAndFade: "slideUpAndFade 1s linear",
			},
		},
	},
	plugins: [],
};
export default config;
