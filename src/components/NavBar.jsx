import { useEffect, useState } from "react";

export default function NavBar() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) {
				return storedTheme === "dark";
			}
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return (
		<nav>
			<p>{isDark ? "dark mode" : "light mode"}</p>
			<button onClick={() => setIsDark(!isDark)}>toggle dark mode</button>
		</nav>
	);
}
