import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AppLayout() {
	return (
		<main className="bg-light-300 dark:bg-dark-600 text-light-400 dark:text-dark-100 h-screen">
			<NavBar />
			<Outlet />
		</main>
	);
}
