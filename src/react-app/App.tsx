// src/App.tsx

//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/tailwind.jfif";
import mainimage from "./assets/Planes.png";
import "./App.css";

function App() {

	return (
		<main className="bg-[url(./assets/BackGround.svg)] bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
			<div className="pattern"/>
			<div className="wrapper">
				<header>
					<img src={mainimage} className="inline-flex" alt="Plane Banner"/>
					<h1 className="text-4xl font-bold text-stone-50">Find <span className="text-blue-800">Planes</span> you like</h1>
				</header>

				<p>Search</p>
			</div>


			<div className="items-center justify-center rounded-md p-2 bg-gray-600 shadow-lg">
				<div className="inline-flex">
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logo" height="200" width="200" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" height="200" width="200" alt="React logo" />
					</a>
					<a href="https://tailwindcss.com/" target="_blank">
						<img src={honoLogo} className="logo tailwindcss" height="200" width="200" alt="TailwindCSS logo" />
					</a>
					<a href="https://workers.cloudflare.com/" target="_blank">
						<img src={cloudflareLogo} className="logo cloudflare" height="200" width="200" alt="Cloudflare logo"/>
					</a>
				</div>
				<h2 className="text-stone-50">Vite + React + TailwindCSS + Cloudflare</h2>
			</div>
		</main>
	);
}

export default App;
